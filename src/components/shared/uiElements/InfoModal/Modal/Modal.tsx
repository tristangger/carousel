import React, { FunctionComponent } from "react";
import styles from "./Modal.module.css";

export type Props = {
    className?: string;
    show?: boolean;
    handleModal: (show: boolean) => void;
}

const Modal: FunctionComponent<Props> = (props) => {
    const {
        children,
        show,
        handleModal,
        className,
    } = props;

    const showHideClassName = show ? styles.displayBlock : styles.displayNone;

    return (
        <div
            className={[styles.modal, showHideClassName, className].join(" ")}
        >
            <section className={styles.modalMain}>
                <div className={styles.flexTextClose}>
                    {children}
                    <div className={styles.infoClose} onClick={() => handleModal(false)} aria-hidden="true" />
                </div>
            </section>
        </div>
    );
};
export default Modal;
