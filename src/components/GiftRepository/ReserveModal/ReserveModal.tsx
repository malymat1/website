import { useEffect, useRef, useState } from "react";
import type Gift from "../../../models/Gift";
import { GrClose, GrCheckmark } from "react-icons/gr";
import styles from "./ReserveModal.module.scss";
import { useTranslation } from "react-i18next";
import Button from "../../Button/Button";

interface ReserveModalProps {
    gift: Gift;
    onClose: () => void;
    onConfirm: (giftId: string, name: string) => void;
}

export default function ReserveModal({ gift, onClose, onConfirm }: ReserveModalProps) {
    const [input, setInput] = useState("");
    const { t } = useTranslation();

    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLDivElement>(null);
    const [imageSize, setImageSize] = useState(0);

    useEffect(() => {
        function handleResize() {
            if (containerRef.current && textRef.current && inputRef.current) {
                const newHeight =
                    window.innerHeight * 0.7 -
                    textRef.current.offsetHeight -
                    inputRef.current.offsetHeight -
                    30;
                const newWidth = containerRef.current.offsetWidth;
                setImageSize(Math.min(newHeight, newWidth));
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function onButtonClick() {
        setInput("");
        onConfirm(gift.id, input);
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <GrClose className={styles.close} onClick={onClose} />
                <div ref={containerRef} className={styles.imageContainer}>
                    <div
                        className={styles.imageFrame}
                        style={{ width: imageSize, height: imageSize }}
                    >
                        <img className={styles.image} src={gift.imageUrl} alt="" />
                    </div>
                </div>
                <div ref={textRef} className={styles.text}>
                    {t("reserveModalText1")}"{gift.title}". {t("reserveModalText2")}
                </div>
                <div ref={inputRef} className={styles.inputContainer}>
                    <input
                        id="reservation-name-input"
                        className={styles.input}
                        placeholder={t("reserveModalInputPlaceholder")}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={onButtonClick} disabled={input === ""}>
                        <GrCheckmark className={styles.icon} />
                    </Button>
                </div>
            </div>
        </div>
    );
}
