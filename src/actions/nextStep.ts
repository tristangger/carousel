import { AnyAction, Dispatch } from "redux";
import { NEXT_STEP } from "../constants";

const nextStep = () => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: NEXT_STEP,
    });
};

export default nextStep;
