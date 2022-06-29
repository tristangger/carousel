import React, { FunctionComponent, Dispatch, useState } from "react";
import { questions } from "../../data/questions.data";
import store from "../../store/store";
import styles from "./QuestionContainer.module.css";
import Answer from "./Answer/Answer";
import { Answer as AnswerInterface } from "../shared/types";
import { setAnswer } from "../../actions/setAnswer";
import nextStep from "../../actions/nextStep";
import HeaderContainer from "../shared/uiElements/HeaderContainer/HeaderContainer";
import Modal from "../shared/uiElements/InfoModal/Modal/Modal";
import FloatingText from "../shared/uiElements/FloatingText/FloatingText";
import Container from "../shared/uiElements/Container/Container";
import tracking from "../shared/utils/tracking";
import { TrackingStepOrigin } from "../../data/trackingStep.data";

interface QuestionProps {
    step: number,
}

const QuestionContainer: FunctionComponent<QuestionProps> = (props) => {
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;

    const { step } = props;
    const question = questions[step];
    const [show, setShow] = useState(false);
    const [infoText, setInfoText] = useState("");

    const updateWeights = (obj) => () => {
        const nextStepTracking = step + 1;
        tracking(nextStepTracking, TrackingStepOrigin.ORIGIN_NEXT);
        dispatchStore(setAnswer(obj));
        dispatchStore(nextStep());
    };

    return (
        <Container>
            <Modal show={show} handleModal={setShow}>
                <FloatingText className={styles.font}>
                    { infoText }
                </FloatingText>
            </Modal>
            <HeaderContainer key={step} imgPath={question?.imgPath} headerText={question?.questionText} />
            <div className={styles.container}>
                {
                    question?.answerOptions.map((el: AnswerInterface) => (
                        <Answer
                            infoModalProps={{ setInfoText, setShow, infoText: el.infoModal }}
                            onClick={updateWeights({ answerId: el.id, questionId: question.id })}
                            key={el.id}
                        >
                            { el.answerText }
                        </Answer>
                    ))
                }
            </div>
        </Container>
    );
};
export default QuestionContainer;
