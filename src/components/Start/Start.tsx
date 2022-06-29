import React, { Dispatch, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import store from "../../store/store";
import nextStep from "../../actions/nextStep";
import Headline from "../shared/uiElements/Headline/Headline";
import styles from "./Start.module.css";
import ButtonStart from "../shared/uiElements/ButtonStart/ButtonStart";
import tracking from "../shared/utils/tracking";
import { getConfig } from "../../store/getConfig";
import { TrackingStepOrigin, TrackingStepState } from "../../data/trackingStep.data";
import Asterisk from "../shared/uiElements/Asterisk/Asterisk";

const starterImagePath = "/images/startbild-geldanlage.png";

const Start: FunctionComponent<any> = () => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const { imagePath } = useSelector((state) => getConfig(state));

    const handleOnClick = () => {
        dispatchStore(nextStep());
        tracking(TrackingStepState.STEP_1_INVESTMENT_CYCLE, TrackingStepOrigin.ORIGIN_START);
    };

    return (
        <>
            <div className={styles.whiteBackground}>
                <img className={styles.startImage} src={`${imagePath}${starterImagePath}`} alt="Geldanlage" />
                <div className={styles.textContent}>
                    <Headline className={`${styles.primary} ${styles.startHeadline}`}>
                        Sie wollen Geld anlegen, aber wissen nicht wie?*
                    </Headline>
                    <p className={styles.secondary}>
                        Finden Sie schnell und einfach heraus, welche Geldanlage zu Ihnen passen
                        könnte.
                    </p>
                </div>
                <ButtonStart onClick={handleOnClick}>
                    Geldanlage finden
                </ButtonStart>
            </div>
            <br />
            <Asterisk />
        </>
    );
};

export default Start;
