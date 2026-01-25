import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        cs: {
            translation: {
                abreviation: "CZ",
                title: "malá svatba",
                wip: "Matěj na webovkách ještě pracuje, dejte mu chvilku čas",
                footerText: "vítej na konci všeho",

                // sections
                regTitle: "přihlášení",
                regText:
                    "Pokud víte, že dorazíte (a jste pozvaní), dejte nám, prosím, vědět. Pojistíte si tak, že na vás zbyde dost jídla a my budeme vědět, na koho se můžeme těšit.",
                regBtn: "dejte nám vědět!",

                giftsTitle: "dary",
                giftsText:
                    "Pokud nás chcete obohatit nejen svou přítomností, velice oceníme knížku dle vašeho výběru, o které si myslíte, že by nám neměla chybět v knihovničce, IKEA poukázky nebo finační obnos. Pokud se vám ani jedna z možností moc nezdá, je možné se inspirovat seznamem přání níže.",
                giftsBtn: "dejte nám něco!",

                dressTitle: "oděv",
                dressText1: "Ano.",
                dressText2:
                    "Oblečte se do čehokoliv uznáte za vhodné, jen byste neměli vypadat líp než ženich a nevěsta. Svatba se bude konat na louce u lesa, takže doporučujeme být bosky.",
                dressText3:
                    "Barvy svatby jsou na výběr níže. Dejte vědět, co si vezmete na sebe a třeba se s vámi někdo sladí. (Kdo tam dá bílou, tak toho odprásknu.)",
                colorPickerBtn: "přidat barvu",

                fotoTitle: "foto",
                fotoText1:
                    "Zde najdete pár fotografií našich skromných maličkostí (abyste věděli, komu předat dary).",

                placeTitle: "místo",
                placeText:
                    "Je to tady a tady a bude to tak a tak. Plus informace o přespání a parkování.",
                placeBtn: "odkaz na stránky",
            },
        },
        no: {
            translation: {
                abreviation: "NO",
                title: "lite bryllup",
                wip: "Matěj jobber fortsatt med nettsidene, gi ham litt tid",

                // sections
                regTitle: "påmelding",
                regText:
                    "Hvis du vet at du kommer (og er invitert), gi oss gjerne beskjed. Da sikrer du at det er nok mat til deg, og vi vet hvem vi kan glede oss til.",
                regBtn: "gi oss beskjed!",
                giftsTitle: "gaver",
                giftsText:
                    "Hvis dere ønsker å berike oss ikke bare med deres tilstedeværelse, setter vi stor pris på en bok etter eget valg som dere mener ikke bør mangle i bokhyllen vår, IKEA-gavekort eller et økonomisk bidrag. Hvis ingen av alternativene frister så mye, kan dere la dere inspirere av ønskelisten nedenfor.",
                giftsBtn: "gi oss noe!",
                dressTitle: "antrekk",
                dressText1: "Ja.",
                dressText2:
                    "Kle dere i det dere synes passer, bare ikke se bedre ut enn bruden og brudgommen. Bryllupet vil finne sted på en eng ved skogen, så vi anbefaler å gå barbeint.",
                dressText3:
                    "Bryllupsfargene kan velges nedenfor. Gi beskjed om hva du har tenkt å ha på deg, så kanskje noen matcher med deg.\nDen som har på seg hvitt, den skyter jeg.",
                colorPickerBtn: "legg til farge",
                fotoTitle: "foto",
                fotoText1:
                    "Her finner dere noen bilder av våre beskjedne små personligheter (så dere vet hvem dere skal gi gavene til).",
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
