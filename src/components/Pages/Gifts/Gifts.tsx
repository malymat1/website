import { useTranslation } from "react-i18next";
import GiftRepository from "../../GiftRepository/GiftRepository";
import styles from "./Gifts.module.scss";

export default function Gifts() {
    const { t } = useTranslation();

    return (
        <>
            <div className={styles.section}>
                <div className={styles.title}>{t("giftsTitle")}</div>
                <div className={styles.paragraphsContainer}>
                    <div className={styles.paragraph}>{t("giftsPageText1")}</div>
                    <div className={styles.paragraph}>{t("giftsPageText2")}</div>
                </div>
            </div>
            <GiftRepository />
        </>
    );
}
