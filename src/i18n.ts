import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        cs: {
            translation: {
                abreviation: "CZ",
                title: "malá svatba",
                wip: "Matěj na webovkách ještě pracuje, dejte mu chvilku čas",
            },
        },
        no: {
            translation: {
                abreviation: "NO",
                title: "lite bryllup",
                wip: "Matěj jobber fortsatt med nettsidene, gi ham litt tid",
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
