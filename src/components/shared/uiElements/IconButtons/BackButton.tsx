import React, { FunctionComponent, Dispatch } from "react";
import { useSelector } from "react-redux";
import store from "../../../../store/store";
import { getConfig } from "../../../../store/getConfig";
import revertAnswer from "../../../../actions/revertAnswer";
import previousStep from "../../../../actions/previousStep";
import styles from "./IconButton.module.css";
import tracking from "../../utils/tracking";
import { TrackingStepOrigin, TrackingStepState } from "../../../../data/trackingStep.data";

const BackButton: FunctionComponent<any> = () => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const { step } = useSelector((state) => getConfig(state));
    const handleBack = () => {
        const previousStepTracking = step - 1;
        tracking(previousStepTracking, TrackingStepOrigin.ORIGIN_BACK);
        if (step > TrackingStepState.STEP_1_INVESTMENT_CYCLE && step < TrackingStepState.STEP_6_RESULTS) {
            dispatchStore(revertAnswer());
        }
        dispatchStore(previousStep());
    };
    return (
        <button
            type="button"
            onClick={handleBack}
            className={styles.buttonArea}
            title="Zurück"
        >
            <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" fill="none">
                    <g transform="translate(15.000000, 15.000000) scale(-1, 1)
                        translate(-15.000000, -15.000000)"
                    >
                        <path
                            d="M15,0 C6.71578125,0 0,6.71578125 0,15 C0,23.2842188 6.71578125,30 15,30
                            C23.2842188,30 30,23.2842188 30,15 C30,6.71578125 23.2842188,0
                            15,0 M15,1.875 C22.2370313,1.875 28.125,7.76296875 28.125,15
                            C28.125,22.2370313 22.2370313,28.125 15,28.125 C7.76296875,28.125
                            1.875,22.2370313 1.875,15 C1.875,7.76296875 7.76296875,1.875 15,1.875"
                            fill="#666666"
                        />
                        <path
                            d="M15,0 C6.71578125,0 0,6.71578125 0,15 C0,23.2842188 6.71578125,30 15,30
                            C23.2842188,30 30,23.2842188 30,15 C30,6.71578125 23.2842188,0 15,0"
                        />
                        <polygon
                            className={styles.whiteFillHover}
                            id="chevron"
                            fill="#666666"
                            points="13.5905625 9.375 12.1875938 10.7784375 16.4138438 14.9995313 12.1875938
                            19.2220313 13.5905625 20.625 19.2188438 14.9995313"
                        />
                    </g>
                </g>
            </svg>
        </button>
    );
};

export default BackButton;
