import { AnyAction, Dispatch } from "redux";
import { SET_ANSWER } from "../constants";
import { AnswerAction, SetAnswerParams } from "./answerAction";
import { questions } from "../data/questions.data";
import { Answer, Question } from "../components/shared/types";

const setAnswer = (setAnswerParams: SetAnswerParams) => (dispatch: Dispatch<AnyAction>): void => {
    const { answerOptions } = questions
        .find((questionElement) => questionElement.id === setAnswerParams.questionId) as Question;
    const { weights, answerText } = answerOptions
        .find((answerElement) => answerElement.id === setAnswerParams.answerId) as Answer;

    const answer: AnswerAction = {
        type: SET_ANSWER,
        productsWeight: weights,
        answerText,
    };
    dispatch(answer);
};

export { setAnswer };
