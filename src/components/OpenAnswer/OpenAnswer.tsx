import React, { FunctionComponent, Dispatch, useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store/store";
import { getConfig } from "../../store/getConfig";
import nextStep from "../../actions/nextStep";
import HeaderContainer from "../shared/uiElements/HeaderContainer/HeaderContainer";
import styles from "./OpenAnswer.module.css";
import setOpenAnswer from "../../actions/setOpenAnswer";
import Container from "../shared/uiElements/Container/Container";
import tracking from "../shared/utils/tracking";
import { TrackingStepOrigin } from "../../data/trackingStep.data";

const enum ErrorMessage {
    MAX_LENGTH = "Ihre Eingabe ist limitiert auf 100 Zeichen.",
    INVALID_CHARS = "Ihre Eingabe enthält ungültige Zeichen.",
}

const iconBubble = "/images/icon_bubble.svg";

const QuestionContainer: FunctionComponent<any> = () => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    const {
        step,
        openAnswer,
    } = useSelector((state) => getConfig(state));

    const { decoded } = openAnswer;

    const [isDisabled, setDisabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleTextChange = (textChange) => {
        setDisabled(false);
        if (textChange.length > 100) {
            setDisabled(true);
            setErrorMessage(ErrorMessage.MAX_LENGTH);
            return;
        }
        try {
            const encodedText = encodeURIComponent(textChange);
            dispatchStore(setOpenAnswer(encodedText, textChange));
        } catch (error) {
            setDisabled(true);
            setErrorMessage(ErrorMessage.INVALID_CHARS);
        }
    };

    const handleNextStep = () => {
        if (!isDisabled) {
            dispatchStore(nextStep());
            const nextStepTracking = step + 1;
            tracking(nextStepTracking, TrackingStepOrigin.ORIGIN_NEXT);
        }
    };

    const questionText = "Wofür möchten Sie Geld anlegen?";

    return (
        <Container>
            <HeaderContainer key={step} imgPath={iconBubble} headerText={questionText} />
            <div className={styles.textInputContainer}>
                <div className={styles.inputBox}>
                    <form className={styles.form}>
                        <textarea
                            className={`${styles.textarea} ${isDisabled ? styles.disabled : ""}`}
                            rows={2}
                            cols={33}
                            name="answer"
                            placeholder="Bitte geben Sie an, wofür Sie Geld anlegen möchten (optional)."
                            onChange={(e) => handleTextChange(e.target.value)}
                            value={decoded}
                        />
                    </form>
                    <button
                        className={styles.iconContainer}
                        onClick={handleNextStep}
                        disabled={isDisabled}
                        type="button"
                    >
                        <div className={styles.greyLine} />
                        <svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1">
                            <polygon
                                fill={isDisabled ? "#b0b0b0" : "#FF0000"}
                                points="1.72126667 0.25 0.125 1.84626667 4.93353333
                          6.64893333 0.125 11.4537333 1.72126667 13.05 8.125 6.64893333"
                            />
                        </svg>
                    </button>

                </div>
                {isDisabled && <small className={styles.errorMessage}>{errorMessage}</small>}

            </div>
        </Container>
    );
};
export default QuestionContainer;
