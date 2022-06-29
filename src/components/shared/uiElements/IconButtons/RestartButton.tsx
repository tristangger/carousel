import React, { FunctionComponent, Dispatch } from "react";
import styles from "./IconButton.module.css";
import restartApplication from "../../../../actions/restartApplication";
import store from "../../../../store/store";
import tracking from "../../utils/tracking";
import { TrackingStepOrigin, TrackingStepState } from "../../../../data/trackingStep.data";

const RestartButton: FunctionComponent<any> = () => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const restart = () => {
        tracking(TrackingStepState.STEP_0_START_PAGE, TrackingStepOrigin.ORIGIN_RESTART);
        dispatchStore(restartApplication());
    };

    return (
        <button
            className={styles.buttonArea}
            onClick={restart}
            type="button"
            title="Neustart"
        >
            <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" fill="none">
                    <g
                        transform="translate(15.000000, 15.000000) scale(-1, 1)
                      translate(-15.000000, -15.000000)"
                    >
                        <path
                            d="M15,0 C6.71578125,0 0,6.71578125 0,15 C0,23.2842188 6.71578125,30 15,30
                            C23.2842188,30 30,23.2842188 30,15 C30,6.71578125 23.2842188,0 15,0 M15,1.875
                            C22.2370313,1.875 28.125,7.76296875 28.125,15 C28.125,22.2370313 22.2370313,28.125
                            15,28.125 C7.76296875,28.125 1.875,22.2370313 1.875,15 C1.875,7.76296875
                            7.76296875,1.875 15,1.875"
                            fill="#666666"
                        />
                        <path
                            d="M15,0 C6.71578125,0 0,6.71578125 0,15 C0,23.2842188 6.71578125,30
                            15,30 C23.2842188,30 30,23.2842188 30,15 C30,6.71578125 23.2842188,0 15,0"
                        />
                        <path
                            className={styles.whiteFillHover}
                            d="M14.8823529,11.8397924 L11.6124567,8.5698962 L14.8823529,5.3
                            L14.8823529,7.41764705 C19.268,7.41764705 22.8235294,10.9112353
                            22.8235294,15.3588235 C22.8235294,19.8064118 19.268,23.3 14.8823529,23.3
                            C10.4967059,23.3 6.94117646,19.8064118 6.94117646,15.3588235
                            C6.94117646,12.7901177 8.2710588,10.4802941 10.117647,9.00588234
                            L11.7058823,10.5941176 C10.2537059,11.6502941 9.0588235,13.4121765
                            9.0588235,15.3588235 C9.0588235,18.566 11.7196471,21.182353 14.8823529,21.182353
                            C18.0450588,21.182353 20.6174706,18.566 20.6174706,15.3588235 C20.6174706,12.1516471
                            18.0450588,9.53529414 14.8823529,9.53529414 C14.882,9.53529414 14.882,10.3034602
                            14.8823529,11.8397924 Z"
                            fill="#666666"
                            transform="translate(14.882353, 14.300000) scale(-1, 1)
                            translate(-14.882353, -14.300000)"
                        />
                    </g>
                </g>
            </svg>
        </button>
    );
};
export default RestartButton;
