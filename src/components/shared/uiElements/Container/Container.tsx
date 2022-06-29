import React, { FunctionComponent } from "react";
import Asterisk from "../Asterisk/Asterisk";
import styles from "./Container.module.css";

 type Props = {
    asterisk?: boolean;
};

const Container: FunctionComponent<Props> = (props) => {
    const { children, asterisk } = props;

    const containerStyle = asterisk ? styles.resultContainer : styles.container;
    return (
        <>
            <div className={containerStyle}>
                {children}
                {!asterisk && <div className={styles.fillingContainer} />}
            </div>
            {asterisk && <Asterisk /> }
        </>
    );
};

export default Container;
