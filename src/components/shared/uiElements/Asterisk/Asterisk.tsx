import React, { FunctionComponent } from "react";
import styles from "./Asterisk.module.css";

const Asterisk: FunctionComponent = () => (

    <div className={styles.sectionContainer}>
        <p className={styles.fontParagraph}>
            <sup>*</sup>
            Die folgenden Hinweise und Informationen dienen ausschließlich einer allgemeinen
            Information über Anlageprodukte und können und sollen eine individuelle Beratung
            durch hierfür geeignete und ausreichend qualifizierte Personen nicht ersetzen.
            Alle hier bereitgestellten Informationen stellen keine Anlageberatung und keine
            Kaufempfehlung dar. Rechtsverbindliche Erklärungen können Sie ausschließlich
            erst nach einer Beratung durch qualifizierte Personen abgeben.
        </p>
    </div>
);

export default Asterisk;
