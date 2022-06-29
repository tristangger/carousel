import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { getConfig } from "../../../../store/getConfig";
import Headline from "../Headline/Headline";
import BackButton from "../IconButtons/BackButton";
import RestartButton from "../IconButtons/RestartButton";
import styles from "./HeaderContainer.module.css";

interface QuestionsProps {
    imgPath: string,
    headerText: string,
}

const HeaderContainer: FunctionComponent<QuestionsProps> = (props) => {
    const { imgPath, headerText } = props;
    const { imagePath } = useSelector((state) => getConfig(state));

    return (
        <div className={styles.headerContainer}>
            <div className={styles.iconRow}>
                <BackButton />
                <div className={styles.headlineIconFlex}>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={`${imagePath}${imgPath}`} alt={`${headerText}_image`} />
                    </div>
                </div>
                <RestartButton />
            </div>
            <Headline className={styles.headlineColor}>
                {headerText}
            </Headline>
        </div>
    );
};

export default HeaderContainer;
