import { Direction, Products } from "./enums";

declare const validAnswerOptionsTag: unique symbol;
declare const validWeightOptionsTag: unique symbol;
declare const validWeightTag: unique symbol;

type ValidAnswerOptions = { readonly [validAnswerOptionsTag]: Array} & Answer[];

export type Question = {
    id: number;
    imgPath: string;
    questionText: string;
    answerOptions: ValidAnswerOptions; // minimuum 2
};

export type Answer = {
    id: number;
    answerText: string;
    infoModal?: string;
    weights: Weight; // always the same count as products
};

export type Weight = {
    [Products.ZERTIFIKATE] : number,
    [Products.AKTIEN] : number,
    [Products.FONDS] : number,
    [Products.FONDSSPARPLAN] : number,
    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG] : number,
}

export type LearnMoreLinks = {
    [Products.ZERTIFIKATE] : string,
    [Products.AKTIEN] : string,
    [Products.FONDS] : string,
    [Products.FONDSSPARPLAN] : string,
    [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG] : string,
}

export type OneWeight = {[key in Products] : number}

export type InitialState = {
    imagePath: string,
    type: string,
    container: string,
    step: number,
    direction: Direction.LEFT | Direction.RIGHT,
    record: Array,
    questionsAnswer: Array<string>,
    productsWeight: Weight,
    openAnswer: {
        encoded: string,
        decoded: string,
    },
    windowWidth: number,
    learnMoreLinks: LearnMoreLinks,
    ifaLink: string,
}

export type ProductPriority = string[];

export type InfoModalProp = {
    setShow: (el: boolean) => void,
    setInfoText: (el: string) => void,
    infoText?: string,
}
