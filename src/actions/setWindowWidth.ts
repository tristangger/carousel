import { AnyAction, Dispatch } from "redux";
import { SET_WINDOW_WIDTH } from "../constants";

const setWindowWidth = () => (dispatch: Dispatch<AnyAction>): void => {
    dispatch({
        type: SET_WINDOW_WIDTH,
    });
};

export default setWindowWidth;
