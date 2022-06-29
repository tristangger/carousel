import { Weight } from "../components/shared/types";

export type AnswerAction = {
    type: string,
    productsWeight: Weight,
    answerText: string,
}

export type SetAnswerParams = {
    questionId: number,
    answerId: number,
}
