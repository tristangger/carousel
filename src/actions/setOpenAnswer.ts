import { AnyAction, Dispatch } from "redux";
import { OPEN_ANSWER } from "../constants";

const setOpenAnswer = (encoded: string, decoded: string) => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: OPEN_ANSWER,
        openAnswer: {
            encoded,
            decoded,
        },
    });
};

export default setOpenAnswer;
