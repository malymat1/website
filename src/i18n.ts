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
                regText1:
                    "Pokud víte, že dorazíte (a jste pozvaní), dejte nám, prosím, vědět. Pojistíte si tak, že na vás zbyde dost jídla a my budeme vědět, na koho se můžeme těšit.",
                regText2:
                    "Kdo se nepřihlásí do 11.6. 13:13, nechť si sobě přiveze vlastní židličku a toasty.",
                regBtn: "dejte nám vědět!",

                giftsTitle: "dary",
                giftsText1:
                    "Pokud nás chcete obohatit nejen svou přítomností, velice oceníme knížku dle vašeho výběru, o které si myslíte, že by nám neměla chybět v knihovničce, IKEA poukázky nebo finační obnos.",
                giftsText2:
                    "Pokud se vám ani jedna z možností moc nezdá, je možné se inspirovat seznamem přání níže. Děkujeme moc!",
                giftsBtn: "dejte nám něco!",

                dressTitle: "oděv",
                dressText1:
                    "Oblečte se do čehokoliv uznáte za vhodné, jen byste neměli vypadat líp než my. Svatba se bude konat na louce u lesa, takže doporučujeme vybrat adekvátní obuv (nebo třeba být bosky, hehe).",
                dressText2:
                    "Barvy svatby jsou na výběr níže. Dejte vědět, co si vezmete na sebe a třeba se s vámi někdo sladí (uznávám, dát bílou by bylo skutečně hodně vtipný, ale zkuste tohle vaše nutkání překonat).",
                colorPickerBtn: "přidejte barvu!",
                colorPickerUndoBtn: "vzít zpátky",

                photoTitle: "foto",
                photoText1:
                    "Zde najdete pár fotografií našich skromných maličkostí (abyste věděli, komu předat dary).",

                placeTitle: "místo",
                placeText1:
                    "Svatba se koná na louce u Brožova mlýna nedaleko vesnice Važice. Je to trochu v háji, ale nemusíte se bát, že nezaparkujete. Připravíme vám tam fakt parádní parkoviště (louku).",
                placeText2:
                    "Kdyby se někomu přece jen na venkově zalíbilo a chtěl by se zdržet přes noc, tak může využít možnosti přespání na louce ve vlastním stanu, případně ve spacáku v prostorách mlýna (na půdě, ve stodole...).",
                placeText3: "Pokud jste na stan moc velký fajnovky, tak se můžete podívat ",
                placeText4: "do tabulky",
                placeText5: " na možnosti ubytování v okolí.",
                placeText6:
                    "Pokud pánové stihnou všechno dostavět, měla by být na místě možnost koupání v malém jezírku, kterou by třeba některé děti rády využily. Tak je případně vybavte vším potřebným.",
                placeBtn: "odkaz na stránky",
                reserve: "zabrat",
                reserveModalText1: "Opravdu si pro sebe chci zabrat ",
                reserveModalText2: "Ať mi ruka upadne, jestli to pak nepřinesu.",
                reserveModalInputPlaceholder: "Tvoje jméno...",
                reserveError: "Dárek se nepodařilo zarezervovat.",
                reserveSuccess: "Dárek úspěšně rezervován.",
                endTitle: "otázky?",
                endText1: "Tohle už je všechno.",
                endText2:
                    "Pokud vám nějaká informace chybí, tak se určitě ozvěte. Rádi vám odpovíme, pokud vaše otázka nebude vyloženě hloupá (hehe).",

                // gifts page
                giftsPageText1:
                    "Zatím tady toho moc není, víme, ale máme v plánu sem něco průběžně přidávat.",
                giftsPageText2: "Co si budeme, stejně by to nikdo takhle dopředu nekupoval.",
            },
        },
        no: {
            translation: {
                abreviation: "NO",
                title: "lite bryllup",
                wip: "Matěj jobber fortsatt med nettsidene, gi ham litt tid",
                footerText: "velkommen til slutten av alt",

                regTitle: "påmelding",
                regText1:
                    "Hvis du vet at du kommer (og er invitert), gi oss gjerne beskjed. Da sikrer du at det blir nok mat til deg, og vi vet hvem vi kan glede oss til.",
                regText2:
                    "Den som ikke melder seg på innen 11.6. kl. 13:13, får ta med egen stol og toast.",
                regBtn: "gi oss beskjed!",

                giftsTitle: "gaver",
                giftsText1:
                    "Hvis du ønsker å berike oss ikke bare med ditt nærvær, setter vi stor pris på en bok etter eget valg som du mener ikke bør mangle i biblioteket vårt, IKEA-gavekort eller et pengebeløp.",
                giftsText2:
                    "Hvis ingen av alternativene helt frister, kan du la deg inspirere av ønskelisten nedenfor.",
                giftsBtn: "gi oss noe!",

                dressTitle: "antrekk",
                dressText1:
                    "Kle deg i det du føler deg komfortabel i, bare ikke se bedre ut enn oss. Bryllupet vil finne sted på en eng i nærheten av skogen, så vi anbefaler å velge passende fottøy (eller kanskje til og med gå barbeint, hehe).",
                dressText2:
                    "Bryllupets farger finner du nedenfor. Gi beskjed om hva du vil ha på deg – kanskje noen matcher deg (jeg innser at hvitt ville vært veldig morsomt, men prøv å motstå fristelsen).",
                colorPickerBtn: "legg til farge!",
                colorPickerUndoBtn: "angre",

                photoTitle: "foto",
                photoText1:
                    "Her finner du noen bilder av våre beskjedne selv (slik at du vet hvem du skal gi gavene til).",

                placeTitle: "sted",
                placeText1:
                    "Bryllupet finner sted på en eng ved Brožův mølle nær landsbyen Važice. Det er litt avsides, men du trenger ikke være redd for å ikke finne parkering. Vi ordner et skikkelig flott parkeringsområde (en eng).",
                placeText2:
                    "Hvis noen skulle like landsbygda så mye at de vil bli over natten, er det mulig å overnatte på engen i eget telt, eller i sovepose inne i møllen (på loftet, i låven ...).",
                placeText3: "Hvis du er for fintfølende for telt, kan du se ",
                placeText4: "i tabellen",
                placeText5: " for overnattingsmuligheter i området.",
                placeText6:
                    "Hvis herrene rekker å gjøre alt ferdig, skal det være mulig å bade i et lite tjern på stedet, noe som kanskje noen av barna gjerne vil benytte seg av. Sørg derfor for å utstyre dem med alt de trenger.",
                placeBtn: "lenke til siden",
                reserve: "reservere",
                reserveModalText1: "Jeg vil virkelig reservere ",
                reserveModalText2: "Må hånden min falle av hvis jeg ikke tar det med.",
                reserveModalInputPlaceholder: "Ditt navn...",
                reserveError: "Gaven kunne ikke reserveres.",
                reserveSuccess: "Gaven ble reservert.",
                endTitle: "spørsmål?",
                endText1: "Det var alt.",
                endText2:
                    "Hvis du savner noen informasjon, så ta gjerne kontakt. Vi svarer gjerne – så lenge spørsmålet ikke er direkte dumt (hehe).",

                giftsPageText1:
                    "Foreløpig er det ikke så mye her, vi vet, men vi planlegger å legge til ting etter hvert.",
                giftsPageText2: "La oss være ærlige, ingen ville kjøpt det så tidlig uansett.",
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
