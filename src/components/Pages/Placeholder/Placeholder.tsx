import raven from "../../../assets/raven.svg";
import fox from "../../../assets/fox_sign.svg";
import styles from "./Placeholder.module.scss";
import { useTranslation } from "react-i18next";

export default function Placeholder() {
    const { t } = useTranslation();

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div className={styles.title}>{t("title")}</div>
                    <div className={styles.text}>11.7.2026 11:07</div>
                    <a className={styles.link} href="https://mapy.com/s/fozadahenu" target="_blank">
                        50.4033856N, 15.2282519E
                    </a>
                </div>
            </div>
            <div className={styles.foxContainer}>
                <img className={styles.fox} src={fox} alt="Fox image" />
                <div className={styles.signOverlay}>
                    <div className={styles.signText}>{t("wip")}</div>
                </div>
            </div>
            <img className={styles.raven} src={raven} alt="Raven image" />
        </div>
    );
}
