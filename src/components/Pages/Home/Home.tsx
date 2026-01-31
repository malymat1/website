import raven from "../../../assets/raven.svg";
import fox from "../../../assets/fox.svg";
import styles from "./Home.module.scss";
import { useTranslation } from "react-i18next";
import Section from "../../Section/Section";
import Button from "../../Button/Button";
import ColorPicker from "../../ColorPicker/ColorPicker";
import { useColors } from "../../../hooks/useColors";
import ColorLibrary from "../../ColorLibrary/ColorLibrary";
import { useNavigate } from "react-router-dom";
import Carousel from "../../Carousel/Carousel";

export default function Home() {
    const { t } = useTranslation();
    const { colors } = useColors();
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.intro}>
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <div className={styles.title}>{t("title")}</div>
                        <div className={styles.text}>11.7.2026 13:13</div>
                    </div>
                    <img className={styles.fox} src={fox} alt="Fox image" />
                    <img className={styles.raven} src={raven} alt="Raven image" />
                </div>
            </div>
            <Section title={t("regTitle")} paragraphs={[t("regText1"), t("regText2")]}>
                <Button
                    onClick={() => {
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLSfmMUhM-r6CSPJ0_VuPdZXE2l147N_gkwUhX6TEKb9Aejp6kA/viewform?usp=header",
                            "_blank",
                            "noopener,noreferrer",
                        );
                    }}
                >
                    {t("regBtn")}
                </Button>
            </Section>
            <Section title={t("giftsTitle")} paragraphs={[t("giftsText1"), t("giftsText2")]}>
                <Button onClick={() => navigate("/gifts")}>{t("giftsBtn")}</Button>
            </Section>
            <Section title={t("dressTitle")} paragraphs={[t("dressText1"), t("dressText2")]}>
                <ColorPicker></ColorPicker>
                <ColorLibrary colors={colors.map((color) => color.code)} />
            </Section>
            <Section title={t("placeTitle")} paragraphs={[t("placeText1"), t("placeText2")]}>
                <div className={styles.paragraph}>
                    {t("placeText3")}
                    <a
                        className={styles.link}
                        href="https://docs.google.com/spreadsheets/d/153F3-jjGp-s5CdRcvkWnEeO25ZSZTOuq"
                        target="_blank"
                    >
                        {t("placeText4")}
                    </a>
                    {t("placeText5")}
                </div>
                <iframe className={styles.map} src="https://mapy.com/s/hobezudeza"></iframe>
                <Button
                    onClick={() =>
                        window.open("https://www.brozuv-mlyn.cz/", "_blank", "noopener,noreferrer")
                    }
                >
                    {t("placeBtn")}
                </Button>
            </Section>
            <Section title={t("photoTitle")} paragraphs={[t("photoText1")]}>
                <Carousel />
            </Section>
            <Section title={t("endTitle")} paragraphs={[t("endText1"), t("endText2")]}></Section>
        </>
    );
}
