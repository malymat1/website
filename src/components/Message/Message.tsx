import { useEffect, type Dispatch, type SetStateAction } from "react";
import styles from "./Message.module.scss";
import { useTranslation } from "react-i18next";
import { GrCircleInformation } from "react-icons/gr";

interface MessageProps {
    error: boolean;
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

export default function Message({ error, visible, setVisible }: MessageProps) {
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <div
            className={`${styles.message} ${error ? styles.error : ""} ${!visible ? styles.fadeOut : ""}`}
        >
            <GrCircleInformation className={styles.icon} />
            <div className={styles.text}>{error ? t("reserveError") : t("reserveSuccess")}</div>
        </div>
    );
}
