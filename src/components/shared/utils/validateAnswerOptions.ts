import { Answer, ValidAnswerOptions } from "../types";

const validateAnswerOptions = (answers: Answer[]) : ValidAnswerOptions => {
    if (answers.length >= 2) return answers as any;
    throw new Error("Not enough answers");
};

export default validateAnswerOptions;
