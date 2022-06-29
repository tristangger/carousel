import React, { FunctionComponent } from "react";
import styles from "./FloatingText.module.css";

export type Props = {
    className?: string;
}

const FloatingText: FunctionComponent<Props> = (props) => {
    const { children, className } = props;
    return (
        <span className={[className, styles.floatingText].join(" ")}>
            {children}
        </span>
    );
};
export default FloatingText;
