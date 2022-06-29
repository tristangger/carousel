import { Question } from "../components/shared/types";
import validateAnswerOptions from "../components/shared/utils/validateAnswerOptions";
import { Products } from "../components/shared/enums";

export const questions: Question[] = [
    {
        id: 1,
        imgPath: "/images/icon_geld_anlegen.svg",
        questionText: "Wie möchten Sie Geld anlegen?",
        answerOptions: validateAnswerOptions([
            {
                id: 1,
                answerText: "Einmalig",
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 1,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 0,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
            {
                id: 2,
                answerText: "Regelmäßig",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
            {
                id: 3,
                answerText: "Regelmäßig und zusätzlich einen angesparten Betrag anlegen",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
        ]),
    },
    {
        id: 2,
        imgPath: "/images/icon_kalender.svg",
        questionText: "Wie lange möchten Sie Geld anlegen?",
        answerOptions: validateAnswerOptions([
            {
                id: 1,
                answerText: "Kurzfristig (0-3 Jahre)",
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 0,
                    [Products.FONDSSPARPLAN]: 0,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
            {
                id: 2,
                answerText: "Mittelfristig (3-5 Jahre)",
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
            {
                id: 3,
                answerText: "Langfristig (>5 Jahre)",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 1,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
        ]),
    },
    {
        id: 3,
        questionText: "Welche Risikobereitschaft haben Sie?",
        imgPath: "/images/icon_brille.svg",
        answerOptions: validateAnswerOptions([
            {
                id: 1,
                answerText: "Sehr hoch",
                infoModal: "Sie haben eine sehr hohe Risikobereitschaft, der sehr hohe Ertragschancen gegenüberstehen.",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 1,
                    [Products.FONDS]: 0,
                    [Products.FONDSSPARPLAN]: 0,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
            {
                id: 2,
                answerText: "Hoch",
                infoModal: "Sie haben eine hohe Risikobereitschaft, der hohe Ertragschancen gegenüberstehen.",
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
            {
                id: 3,
                answerText: "Ausgeprägt",
                infoModal: `Sie haben eine ausgeprägte Risikobereitschaft, der überdurchschnittliche\
                            Ertragschancen gegenüberstehen.`,
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
            {
                id: 4,
                answerText: "Mäßig",
                infoModal: `Sie haben eine mäßige Risikobereitschaft, der begrenzte\
                            Ertragschancen gegenüberstehen.`,
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
        ]),
    },
    {
        id: 4,
        imgPath: "/images/icon_hand.svg",
        questionText: "Wie möchten Sie Ihr Geld managen?",
        answerOptions: validateAnswerOptions([
            {
                id: 1,
                answerText: "Durch professionelle Hände, die sich aktiv um mein Geld kümmern.",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 1,
                },
            },
            {
                id: 2,
                answerText: "Ich möchte mitentscheiden und gleichzeitig Empfehlungen bekommen.",
                weights: {
                    [Products.ZERTIFIKATE]: 0,
                    [Products.AKTIEN]: 0,
                    [Products.FONDS]: 1,
                    [Products.FONDSSPARPLAN]: 1,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
            {
                id: 3,
                answerText: "Ich kümmere mich selbst.",
                weights: {
                    [Products.ZERTIFIKATE]: 1,
                    [Products.AKTIEN]: 1,
                    [Products.FONDS]: 0,
                    [Products.FONDSSPARPLAN]: 0,
                    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                },
            },
        ]),
    },
];
