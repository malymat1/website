import { useEffect, useRef } from "react";
import { useGifts } from "../../hooks/useGifts";
import GiftItem from "./GiftItem/GiftItem";
import styles from "./GiftRepository.module.scss";

export default function GiftRepository() {
    const { gifts } = useGifts();
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function updateColumns() {
            if (gridRef.current) {
                const width = gridRef.current.offsetWidth;
                const columns = Math.ceil(width / 400);
                gridRef.current.style.setProperty("--columns", columns.toString());
            }
        }
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, []);

    return (
        <div ref={gridRef} className={styles.giftRepository}>
            {gifts.map((gift, index) => (
                <GiftItem key={index} gift={gift} />
            ))}
        </div>
    );
}
