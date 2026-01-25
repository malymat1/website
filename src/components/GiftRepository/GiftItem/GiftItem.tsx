import { TbLock, TbGift } from "react-icons/tb";
import type Gift from "../../../models/Gift";
import Button from "../../Button/Button";
import styles from "./GiftItem.module.scss";
import { useTranslation } from "react-i18next";

interface GiftItemProps {
    gift: Gift;
}

export default function GiftItem({ gift }: GiftItemProps) {
    const { t } = useTranslation();

    return (
        <div className={styles.giftItem}>
            <a className={styles.imageLink} href={gift.linkUrl} target="_blank">
                {gift.reserved ? (
                    <TbLock className={styles.icon} />
                ) : (
                    <TbGift className={styles.icon} />
                )}
                <img className={styles.image} src={gift.imageUrl} alt="" />
            </a>
            <div className={styles.infoPanel}>
                <a className={styles.title} href={gift.linkUrl} target="_blank">
                    {gift.title}
                </a>
                <div className={styles.buttonContainer}>
                    <Button onClick={() => {}} disabled={gift.reserved}>
                        {t("reserve")}
                    </Button>
                </div>
            </div>
        </div>
    );
}
