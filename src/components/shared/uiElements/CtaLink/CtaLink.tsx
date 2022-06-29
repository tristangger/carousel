import React, { FunctionComponent } from "react";
import tracking from "../../utils/tracking";
import styles from "./CtaLink.module.css";
import { TrackingStepState } from "../../../../data/trackingStep.data";

export type Props = {
    href: string;
    productId?: string;
};

const CtaLink: FunctionComponent<Props> = (props) => {
    const { href } = props;
    const handleOnClick = () => tracking(TrackingStepState.STEP_7_IFA_CALLED);
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className={styles.ctaLinkAHref}
            onClick={handleOnClick}
        >
            <div className={styles.ctaLinkRedButton}>
                Beratungstermin vereinbaren
            </div>
        </a>
    );
};
export default CtaLink;
