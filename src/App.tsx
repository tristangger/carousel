import React, {
    Dispatch,
    FunctionComponent, useLayoutEffect, useRef, useState,
} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useSelector } from "react-redux";
import { getConfig } from "./store/getConfig";
import { questions } from "./data/questions.data";
import QuestionContainer from "./components/QuestionContainer/QuestionContainer";
import Result from "./components/Result/Result";
import Start from "./components/Start/Start";
import OpenAnswer from "./components/OpenAnswer/OpenAnswer";
import { Direction } from "./components/shared/enums";
import tracking from "./components/shared/utils/tracking";
import { debounce } from "./components/shared/utils/debounce";
import styles from "./App.module.css";
import store from "./store/store";
import setWindowWidth from "./actions/setWindowWidth";
import { TrackingStepOrigin, TrackingStepState } from "./data/trackingStep.data";

const App: FunctionComponent = () => {
    const { step, direction, windowWidth } = useSelector((state) => getConfig(state));
    const isLeftDirection = direction === Direction.LEFT;
    /* we need to differentiate if we are at STEP_0 because of the restart button, back button
    or app start. If step equals STEP_0 and direcion is left that means it is the initial start of the app,
    otherwise direction is undefined by pressing the restart button and right by pressing the back button
    in STEP_1 */
    if (step === TrackingStepState.STEP_0_START_PAGE && isLeftDirection) {
        tracking(TrackingStepState.STEP_0_START_PAGE, TrackingStepOrigin.ORIGIN_REQUEST);
    }
    const componentRef = useRef<HTMLDivElement|null>(null);
    const padding = 20;
    const maxAppWidth = 600;
    const screenWidth = windowWidth - padding;
    const [containerWidth, setContainerWidth] = useState(screenWidth < maxAppWidth ? screenWidth : maxAppWidth);
    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;

    useLayoutEffect(() => {
        const handleResize = () => {
            dispatchStore(setWindowWidth());
            if (componentRef.current) setContainerWidth(componentRef.current.offsetWidth);
        };

        window.addEventListener("resize", debounce(handleResize, 100));

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [componentRef]);

    const classNames = {
        enter: isLeftDirection ? styles.enterLeft : styles.enterRight,
        enterActive: isLeftDirection ? styles.enterActiveLeft : styles.enterActiveRight,
        exit: isLeftDirection ? styles.exitLeft : styles.exitRight,
        exitActive: isLeftDirection ? styles.exitActiveLeft : styles.exitActiveRight,
    };

    return (
        <div className={styles.app}>
            <div
                ref={componentRef}
                className={[styles.container, (isLeftDirection ? styles.flexReverse : "")].join(" ")}
            >
                <TransitionGroup
                    component={null}
                    childFactory={(child) => React.cloneElement(child, { step, classNames })}
                >
                    <CSSTransition
                        key={step}
                        timeout={500}
                        unmountOnExit
                        classNames={{
                            enter: isLeftDirection ? styles.enterLeft : styles.enterRight,
                            enterActive: styles.enterActive,
                            exit: isLeftDirection ? styles.exitLeft : styles.exitRight,
                            exitActive: isLeftDirection ? styles.exitActiveLeft : styles.exitActiveRight,
                        }}
                    >
                        <div className={styles.appContainer} style={{ minWidth: containerWidth }}>
                            {step < questions.length && step >= 0 && <QuestionContainer step={step} />}
                            {step === -1 && <Start />}
                            {step === questions.length && <OpenAnswer />}
                            {step === questions.length + 1 && <Result />}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default App;
