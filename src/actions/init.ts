import { AnyAction, Dispatch } from "redux";
import { SET_CONFIG } from "../constants";
import { Direction, Products } from "../components/shared/enums";
import { InitialState } from "../components/shared/types";

type ConfigType = {
    container: string,
    path: string,
    fondsLearnMore: string,
    fondsSparplanLearnMore: string,
    fondgebundeneLebensversicherungLearnMore: string,
    aktienLearnMore: string,
    zertifikateLearnMore: string,
    ifaLink: string,
}

export const init = (config: ConfigType) => (dispatch: Dispatch<AnyAction>): void => {
    const initState: InitialState = {
        type: SET_CONFIG,
        container: config.container,
        record: [],
        imagePath: config.path,
        step: -1,
        questionsAnswer: [],
        direction: Direction.LEFT,
        openAnswer: {
            encoded: "",
            decoded: "",
        },
        productsWeight: {
            [Products.ZERTIFIKATE]: 0,
            [Products.AKTIEN]: 0,
            [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
            [Products.FONDS]: 0,
            [Products.FONDSSPARPLAN]: 0,
        },
        windowWidth: window.innerWidth,
        learnMoreLinks: {
            [Products.ZERTIFIKATE]: config.zertifikateLearnMore,
            [Products.AKTIEN]: config.aktienLearnMore,
            [Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG]: config.fondgebundeneLebensversicherungLearnMore,
            [Products.FONDS]: config.fondsLearnMore,
            [Products.FONDSSPARPLAN]: config.fondsSparplanLearnMore,
        },
        ifaLink: config.ifaLink,
    };
    dispatch(initState);
};
