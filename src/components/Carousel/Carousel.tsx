import { TbCaretLeft, TbCaretRight } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.scss";

export default function Carousel() {
    const [images, setImages] = useState<string[]>([]);

    const carouselRef = useRef<HTMLDivElement>(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const scrollInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    const isTouchScreen =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;

    useEffect(() => {
        const importImages = async () => {
            const imageModules = import.meta.glob("/src/assets/photos/*");
            const loadedImages: string[] = [];

            for (const path in imageModules) {
                const module = (await imageModules[path]()) as { default: string };
                loadedImages.push(module.default);
            }

            setImages(loadedImages);
        };
        importImages();
    }, []);

    useEffect(() => {
        function handleResize() {
            if (carouselRef.current) {
                const width = carouselRef.current.offsetWidth;
                setCarouselWidth(width);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        function handleScroll() {
            const content = contentRef.current;
            if (content) {
                const images = [...content.querySelectorAll("img")];
                const oneIterationWidth = images
                    .slice(0, images.length / 3)
                    .reduce((sum, img) => (sum += img.offsetWidth + 10), 0);
                if (content.scrollLeft <= 0) {
                    const prevScrollBehavior = content.style.scrollBehavior;
                    content.style.scrollBehavior = "auto";
                    content.scrollLeft += oneIterationWidth;
                    content.style.scrollBehavior = prevScrollBehavior;
                }
                if (content.scrollLeft >= oneIterationWidth * 2) {
                    const prevScrollBehavior = content.style.scrollBehavior;
                    content.style.scrollBehavior = "auto";
                    content.scrollLeft -= oneIterationWidth;
                    content.style.scrollBehavior = prevScrollBehavior;
                }
            }
        }
        const content = contentRef.current;
        if (content) {
            content.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (content) {
                content.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            const images = [...content.querySelectorAll("img")];
            const oneIterationWidth = images
                .slice(0, images.length / 3)
                .reduce((sum, img) => (sum += img.offsetWidth + 10), 0);
            const prevScrollBehavior = content.style.scrollBehavior;
            content.style.scrollBehavior = "auto";
            content.scrollLeft += oneIterationWidth;
            content.style.scrollBehavior = prevScrollBehavior;
        }
    }, [images]);

    function scrollLeftStep() {
        const content = contentRef.current;
        if (content) {
            content.style.scrollBehavior = "auto";
            content.scrollLeft -= 5;
        }
    }

    function scrollRightStep() {
        const content = contentRef.current;
        if (content) {
            content.style.scrollBehavior = "auto";
            content.scrollLeft += 5;
        }
    }

    function startScrollLeft() {
        scrollLeftStep();
        if (scrollInterval.current) clearInterval(scrollInterval.current);
        scrollInterval.current = setInterval(scrollLeftStep, 5);
    }
    function stopScroll() {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    }

    function startScrollRight() {
        scrollRightStep();
        if (scrollInterval.current) clearInterval(scrollInterval.current);
        scrollInterval.current = setInterval(scrollRightStep, 5);
    }

    function handleOverlayWheel(e: React.WheelEvent) {
        if (contentRef.current) {
            contentRef.current.scrollLeft += e.deltaY || e.deltaX;
        }
    }

    return (
        <div className={styles.carousel} ref={carouselRef}>
            {!isTouchScreen && (
                <div
                    className={styles.left}
                    onMouseDown={startScrollLeft}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    onTouchStart={startScrollLeft}
                    onTouchEnd={stopScroll}
                    onWheel={handleOverlayWheel}
                >
                    <TbCaretLeft className={styles.icon} />
                </div>
            )}
            <div
                className={styles.content}
                ref={contentRef}
                style={{ height: (carouselWidth * 9) / 16 }}
            >
                {images.map((src, index) => (
                    <img
                        className={styles.item}
                        key={index}
                        src={src}
                        alt={`Carousel item ${index + 1}`}
                        draggable={false}
                    />
                ))}
                {images.map((src, index) => (
                    <img
                        className={styles.item}
                        key={index}
                        src={src}
                        alt={`Carousel item ${index + 1}`}
                        draggable={false}
                    />
                ))}
                {images.map((src, index) => (
                    <img
                        className={styles.item}
                        key={index}
                        src={src}
                        alt={`Carousel item ${index + 1}`}
                        draggable={false}
                    />
                ))}
            </div>
            {!isTouchScreen && (
                <div
                    className={styles.right}
                    onMouseDown={startScrollRight}
                    onMouseUp={stopScroll}
                    onMouseLeave={stopScroll}
                    onTouchStart={startScrollRight}
                    onTouchEnd={stopScroll}
                    onWheel={handleOverlayWheel}
                >
                    <TbCaretRight className={styles.icon} />
                </div>
            )}
        </div>
    );
}
