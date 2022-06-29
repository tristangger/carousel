import { AnyAction, Dispatch } from "redux";
import { PREVIOUS_STEP } from "../constants";

const previousStep = () => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: PREVIOUS_STEP,
    });
};

export default previousStep;
