import React, { FunctionComponent, ReactChild } from "react";
import { InfoModalProp } from "../../shared/types";
import FloatingText from "../../shared/uiElements/FloatingText/FloatingText";
import InfoModal from "../../shared/uiElements/InfoModal/InfoModal";
import styles from "./Answer.module.css";

interface AnswerProps {
    children: ReactChild,
    onClick: () => void,
    infoModalProps: InfoModalProp,
}

const Answer: FunctionComponent<AnswerProps> = (props) => {
    const {
        children,
        onClick,
        infoModalProps,
    } = props;

    return (
        <div className={(styles.answer)}>
            <div className={(styles.clickArea)} onClick={onClick} aria-hidden="true" />
            <div className={(styles.flexboxAnswer)}>
                <div className={(styles.flexboxLabelInfo)}>
                    <FloatingText className={styles.floatingTextColor}>
                        { children }
                    </FloatingText>
                    {infoModalProps.infoText && <InfoModal infoModalProps={infoModalProps} />}
                </div>
                <div className={styles.iconContainer}>
                    <div className={styles.greyLine} />
                    <svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1">
                        <polygon
                            fill="#FF0000"
                            points="1.72126667 0.25 0.125 1.84626667 4.93353333
                          6.64893333 0.125 11.4537333 1.72126667 13.05 8.125 6.64893333"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Answer;
