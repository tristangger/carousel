import React, { FunctionComponent, useMemo } from "react";
import styles from "./ButtonRow.module.css";
import TextLink from "../../../shared/uiElements/textLink/TextLink";
import CtaLink from "../../../shared/uiElements/CtaLink/CtaLink";
import linkValidator from "./utils/linkValidator";

interface ButtonRowProps {
    isNarrow: boolean;
    learnMoreLink?: string;
    ifaLink: string;
    productId: string;
}
const ButtonRow: FunctionComponent<ButtonRowProps> = (props) => {
    const {
        isNarrow, learnMoreLink = "", ifaLink, productId,
    } = props;
    const learnMoreLinkValidated = linkValidator(learnMoreLink);
    const encodedProductId = useMemo(() => encodeURIComponent(productId), [productId]);
    return (
        <div className={`${styles.buttonContainer} ${isNarrow ? styles.fullWidth : ""}`}>
            {learnMoreLinkValidated && (
                <TextLink
                    href={learnMoreLinkValidated}
                    className={`${styles.primaryButton}`}
                >
                    Mehr erfahren
                </TextLink>
            )}
            <CtaLink href={`${ifaLink}selected:${encodedProductId}&n=true`} productId={productId} />
        </div>
    );
};

export default ButtonRow;
