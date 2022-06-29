import React, { FunctionComponent, useState } from "react";
import styles from "./TextLink.module.css";
import Chevron from "../Chevron/Chevron";
import tracking from "../../utils/tracking";
import { TrackingStepState } from "../../../../data/trackingStep.data";

export type Props = {
    className?: string;
    href: string;
}

const productPage = "produktseite_";

const TextLink: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        href,
    } = props;

    const [isHover, setHover] = useState(false);
    const handleOnClick = () => {
        const escapedDetails02 = encodeURIComponent(`${productPage}${href}`);
        tracking(TrackingStepState.STEP_7_PRODUCT, "", escapedDetails02);
    };
    const grey = "#666";
    const white = "#FFF";
    return (
        <a
            className={[className, styles.container].join(" ")}
            href={href}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handleOnClick()}
        >
            {children}
            <Chevron
                className={styles.chevron}
                fillArrow={isHover ? white : grey}
                fillCircle={grey}
                hoverColor={isHover ? grey : white}
            />
        </a>
    );
};
export default TextLink;
