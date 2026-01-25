import raven from "../../../assets/raven.svg";
import fox from "../../../assets/fox.svg";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import Section from "../../Section/Section";
import Button from "../../Button/Button";
import ColorPicker from "../../ColorPicker/ColorPicker";
import { useColors } from "../../../hooks/useColors";
import ColorLibrary from "../../ColorLibrary/ColorLibrary";

export default function Home() {
    const { t } = useTranslation();
    const { colors } = useColors();

    return (
        <>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>{t("title")}</div>
                        <div className={styles.text}>11.7.2026 13:13</div>
                        <a
                            className={styles.link}
                            href="https://mapy.com/s/fozadahenu"
                            target="_blank"
                        >
                            50.4033856N, 15.2282519E
                        </a>
                    </div>
                    <img className={styles.fox} src={fox} alt="Fox image" />
                    <img className={styles.raven} src={raven} alt="Raven image" />
                </div>
            </div>
            <Section title={t("regTitle")} paragraphs={[t("regText")]}>
                <Button label={t("regBtn")} onClick={() => {}} />
            </Section>
            <Section title={t("giftsTitle")} paragraphs={[t("giftsText")]}>
                <Button label={t("giftsBtn")} onClick={() => {}} />
            </Section>
            <Section
                title={t("dressTitle")}
                paragraphs={[t("dressText1"), t("dressText2"), t("dressText3")]}
            >
                <ColorPicker></ColorPicker>
                <ColorLibrary colors={colors.map((color) => color.code)} />
            </Section>
            <Section title={t("placeTitle")} paragraphs={[t("placeText")]}>
                <iframe className={styles.map} src="https://mapy.com/s/hobezudeza"></iframe>
                <Button
                    label={t("placeBtn")}
                    onClick={() =>
                        window.open("https://www.brozuv-mlyn.cz/", "_blank", "noopener,noreferrer")
                    }
                ></Button>
            </Section>
        </>
    );
}
