import React, { FunctionComponent } from "react";
import InfoIcon from "./InfoIcon/InfoIcon";
import styles from "./InfoModal.module.css";
import { InfoModalProp } from "../../types";

export type Props = {
    className?: string,
    infoModalProps: InfoModalProp,
}

const InfoModal: FunctionComponent<Props> = (props) => {
    const {
        infoModalProps,
    } = props;

    const handleOnclick = () => {
        infoModalProps.setShow(true);
        infoModalProps.setInfoText(infoModalProps.infoText || "");
    };

    return (
        <div className={styles.infoModal}>
            <InfoIcon
                color="red"
                onClick={handleOnclick}
            />
        </div>
    );
};

export default InfoModal;
