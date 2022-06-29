import React from "react";
import styles from "./Chevron.module.css";

export type Props = {
    className?: string;
    fillCircle?: string;
    fillArrow?: string;
    hoverColor?: string;

}
const Chevron = (props: Props) => {
    const {
        className,
        fillCircle,
        fillArrow,
        hoverColor,
    } = props;
    return (

        <svg
            width="66px"
            height="66px"
            viewBox="0 0 66 66"
            version="1.1"
            className={[className, styles.chevron].join(" ")}
        >
            <title>icons / arrow_fct_sec_ini</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="0" fill={hoverColor || "none"} />
            <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="icons-/-arrow_fct_sec_ini">

                    <path
                        fill={fillCircle || "grey"}
                        d="M33,1 C15.327,1 1,15.327 1,33 C1,50.673 15.327,65 33,65
                C50.673,65 65,50.673 65,33 C65,15.327 50.673,1 33,1 M33,5 C48.439,5
                61,17.561 61,33 C61,48.439 48.439,61 33,61 C17.561,61 5,48.439 5,33
                C5,17.561 17.561,5 33,5"
                        id="Fill-1"
                    />
                    <polygon
                        fill={fillArrow || "grey"}
                        id="Fill-3"
                        points="29.9932 21 27.0002 23.994 36.0162 32.999
                27.0002 42.007 29.9932 45 42.0002 32.999"
                    />
                </g>
            </g>
        </svg>
    );
};

export default Chevron;
