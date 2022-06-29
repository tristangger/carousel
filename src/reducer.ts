import { Reducer } from "redux";
import { Products, Direction } from "./components/shared/enums";
import { InitialState } from "./components/shared/types";

import {
    REVERT_ANSWER,
    SET_ANSWER,
    SET_CONFIG,
    NEXT_STEP,
    PREVIOUS_STEP,
    OPEN_ANSWER,
    RESTART,
    SET_WINDOW_WIDTH,
} from "./constants";

export interface Config {
    [key: string]: any;
}

const {
    ZERTIFIKATE,
    AKTIEN,
    FONDSGEBUNDENE_LEBENSVERSICHERUNG,
    FONDS,
    FONDSSPARPLAN,
} = Products;

const init: Partial<InitialState> = {
    openAnswer: {
        decoded: "",
        encoded: "",
    },
};

const configReducer: Reducer<any> = (state: Config = init, action: any = {}) => {
    switch (action.type) {
    case SET_CONFIG:
        return {
            ...state,
            step: action.step,
            direction: action.direction,
            container: action.container,
            imagePath: action.imagePath,
            record: action.record,
            questionsAnswer: action.questionsAnswer,
            productsWeight: action.productsWeight,
            windowWidth: window.innerWidth,
            openAnswer: action.openAnswer,
            learnMoreLinks: {
                [ZERTIFIKATE]: action.learnMoreLinks[ZERTIFIKATE],
                [AKTIEN]: action.learnMoreLinks[AKTIEN],
                [FONDSGEBUNDENE_LEBENSVERSICHERUNG]: action.learnMoreLinks[FONDSGEBUNDENE_LEBENSVERSICHERUNG],
                [FONDS]: action.learnMoreLinks[FONDS],
                [FONDSSPARPLAN]: action.learnMoreLinks[FONDSSPARPLAN],
            },
            ifaLink: action.ifaLink,
        };
    case SET_ANSWER:
        return {
            ...state,
            questionsAnswer: [...state.questionsAnswer, action.answerText],
            record: [...state.record, {
                [ZERTIFIKATE]: action.productsWeight[ZERTIFIKATE],
                [AKTIEN]: action.productsWeight[AKTIEN],
                [FONDSGEBUNDENE_LEBENSVERSICHERUNG]: action.productsWeight[FONDSGEBUNDENE_LEBENSVERSICHERUNG],
                [FONDS]: action.productsWeight[FONDS],
                [FONDSSPARPLAN]: action.productsWeight[FONDSSPARPLAN],
            }],
            productsWeight: {
                [ZERTIFIKATE]:
                    state.productsWeight[ZERTIFIKATE] + action.productsWeight[ZERTIFIKATE],
                [AKTIEN]:
                    state.productsWeight[AKTIEN] + action.productsWeight[AKTIEN],
                [FONDSGEBUNDENE_LEBENSVERSICHERUNG]:
                    state.productsWeight[FONDSGEBUNDENE_LEBENSVERSICHERUNG]
                    + action.productsWeight[FONDSGEBUNDENE_LEBENSVERSICHERUNG],
                [FONDS]:
                    state.productsWeight[FONDS] + action.productsWeight[FONDS],
                [FONDSSPARPLAN]:
                    state.productsWeight[FONDSSPARPLAN] + action.productsWeight[FONDSSPARPLAN],
            },
        };

    case REVERT_ANSWER:
        return {
            ...state,
            questionsAnswer: state.questionsAnswer.slice(0, -1),
            record: state.record.slice(0, -1),
            productsWeight: {
                [ZERTIFIKATE]:
                state.productsWeight[ZERTIFIKATE] - state.record[state.record.length - 1][ZERTIFIKATE],
                [AKTIEN]:
                state.productsWeight[AKTIEN] - state.record[state.record.length - 1][AKTIEN],
                [FONDSGEBUNDENE_LEBENSVERSICHERUNG]:
                state.productsWeight[FONDSGEBUNDENE_LEBENSVERSICHERUNG]
                - state.record[state.record.length - 1][FONDSGEBUNDENE_LEBENSVERSICHERUNG],
                [FONDS]:
                state.productsWeight[FONDS] - state.record[state.record.length - 1][FONDS],
                [FONDSSPARPLAN]:
                state.productsWeight[FONDSSPARPLAN]
                - state.record[state.record.length - 1][FONDSSPARPLAN],
            },
        };

    case NEXT_STEP:
        return {
            ...state,
            step: state.step + 1,
            direction: Direction.LEFT,
        };

    case PREVIOUS_STEP:
        return {
            ...state,
            step: state.step - 1,
            direction: Direction.RIGHT,
        };
    case OPEN_ANSWER:
        return {
            ...state,
            openAnswer: {
                encoded: action.openAnswer.encoded,
                decoded: action.openAnswer.decoded,
            },
        };
    case RESTART:
        return {
            ...state,
            record: [],
            direction: undefined,
            step: -1,
            openAnswer: {
                encoded: "",
                decoded: "",
            },
            questionAnswer: [],
            productsWeight: {
                [ZERTIFIKATE]: 0,
                [AKTIEN]: 0,
                [FONDSGEBUNDENE_LEBENSVERSICHERUNG]: 0,
                [FONDS]: 0,
                [FONDSSPARPLAN]: 0,
            },
        };
    case SET_WINDOW_WIDTH:
        return {
            ...state,
            windowWidth: window.innerWidth,
        };
    default:
        return state;
    }
};

export default configReducer;
