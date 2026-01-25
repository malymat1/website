import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className={styles.footer}>
            <div className={styles.footerText}>{t("footerText")}</div>
        </div>
    );
}
