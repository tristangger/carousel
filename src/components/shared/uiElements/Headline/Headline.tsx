import React, { FunctionComponent } from "react";
import styles from "./Headline.module.css";

export type Props = {
    className?: string;
}

const Headline: FunctionComponent<Props> = (props) => {
    const { children, className } = props;
    return (
        <h1 className={[className, styles.headline].join(" ")}>
            {children}
        </h1>
    );
};
export default Headline;
