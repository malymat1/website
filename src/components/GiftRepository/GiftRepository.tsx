import { useEffect, useRef, useState } from "react";
import { useGifts } from "../../hooks/useGifts";
import GiftItem from "./GiftItem/GiftItem";
import styles from "./GiftRepository.module.scss";
import ReserveModal from "./ReserveModal/ReserveModal";
import type Gift from "../../models/Gift";
import Message from "../Message/Message";

export default function GiftRepository() {
    const { gifts, reserveGift } = useGifts();
    const gridRef = useRef<HTMLDivElement>(null);
    const [selectedGift, setSelectedGift] = useState<Gift | undefined>(undefined);
    const [messageVisible, setMessageVisible] = useState(false);
    const [error, setError] = useState(false);

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

    function onClose() {
        setSelectedGift(undefined);
    }

    async function onConfirm(giftId: string, name: string) {
        try {
            await reserveGift(giftId, name);
            setError(false);
        } catch (error) {
            setError(true);
        }
        setMessageVisible(true);
        onClose();
    }

    return (
        <>
            {selectedGift !== undefined && (
                <ReserveModal gift={selectedGift} onClose={onClose} onConfirm={onConfirm} />
            )}
            <div ref={gridRef} className={styles.giftRepository}>
                {gifts.map((gift, index) => (
                    <GiftItem
                        key={index}
                        gift={gift}
                        onClick={() => {
                            setSelectedGift(gift);
                        }}
                    />
                ))}
            </div>
            <Message error={error} visible={messageVisible} setVisible={setMessageVisible} />
        </>
    );
}
