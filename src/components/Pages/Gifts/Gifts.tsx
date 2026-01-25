import { useTranslation } from "react-i18next";
import Section from "../../Section/Section";
import GiftRepository from "../../GiftRepository/GiftRepository";

export default function Gifts() {
    const { t } = useTranslation();

    return (
        <>
            <Section title={t("giftsTitle")} paragraphs={[t("giftsPageText")]} />
            <GiftRepository />
        </>
    );
}
