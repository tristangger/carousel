import { AnyAction, Dispatch } from "redux";
import { RESTART } from "../constants";

const restartApplication = () => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: RESTART,
    });
};

export default restartApplication;
