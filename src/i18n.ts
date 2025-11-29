import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        cs: {
            translation: {
                abreviation: "CZ",
                title: "malá svatba",
            },
        },
        no: {
            translation: {
                abreviation: "NO",
                title: "lite bryllup",
            },
        },
    },
    lng: "cs",
    fallbackLng: "cs",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
