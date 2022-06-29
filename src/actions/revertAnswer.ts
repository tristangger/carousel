import { AnyAction, Dispatch } from "redux";
import { REVERT_ANSWER } from "../constants";

const revertAnswer = () => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: REVERT_ANSWER,
    });
};

export default revertAnswer;
