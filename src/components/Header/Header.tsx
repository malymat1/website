import styles from "./Header.module.scss";

import { GrGlobe, GrFormDown, GrHomeRounded } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    function changeLanguage() {
        const nextLang = i18n.language === "cs" ? "no" : "cs";
        i18n.changeLanguage(nextLang);
    }

    function returnHome() {
        navigate("/");
    }

    return (
        <div className={styles.header}>
            <div className={styles.languageSwitch}>
                <GrHomeRounded className={styles.globeIcon} onClick={returnHome} />
            </div>
            <div className={styles.languageSwitch} onClick={changeLanguage}>
                <GrGlobe className={styles.globeIcon} />
                <GrFormDown className={styles.arrowIcon} />
                <div className={styles.text}>{t("abreviation")}</div>
            </div>
        </div>
    );
}
