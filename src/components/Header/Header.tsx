import styles from "./Header.module.scss";

import { GrGlobe, GrFormDown } from "react-icons/gr";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t, i18n } = useTranslation();

    function changeLanguage() {
        const nextLang = i18n.language === "cs" ? "no" : "cs";
        i18n.changeLanguage(nextLang);
    }

    return (
        <div className={styles.header}>
            <div className={styles.languageSwitch} onClick={changeLanguage}>
                <GrGlobe className={styles.globeIcon} />
                <GrFormDown className={styles.arrowIcon} />
                <div className={styles.text}>{t("abreviation")}</div>
            </div>
        </div>
    );
}
