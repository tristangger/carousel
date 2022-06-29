import React, { FunctionComponent, useState } from "react";
import styles from "./ButtonStart.module.css";
import Chevron from "../Chevron/Chevron";

export type Props = {
    className?: string;
    onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}

const ButtonStart: FunctionComponent<Props> = (props) => {
    const {
        children,
        className,
        onClick,
    } = props;

    const [isHover, setHover] = useState(false);
    const red = "#ff0000";
    const white = "#FFF";

    return (
        <div
            className={styles.container}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(event) => {
                if (event.key === "Enter") onClick();
            }}
        >
            <button
                className={[className, styles.font].join(" ")}
                type="button"
            >
                {children}
            </button>
            <Chevron
                className={styles.chevron}
                fillArrow={isHover ? red : white}
                fillCircle={white}
                hoverColor={isHover ? white : red}
            />
        </div>
    );
};
export default ButtonStart;
