import { Dispatch } from "react";
import { setAnswer } from "../actions/setAnswer";
import filteredProducts from "../components/Result/filterdProducts/filterdProducts";
import filterByThreshold from "../components/Result/filterByThreshold/filterByThreshold";
import store from "../store/store";
import { init } from "../actions/init";
import { testCasesJson } from "./testCases";

test.each(testCasesJson)(
    "#$id at Excel-Row: $row ($questionsAnswers) -> $expected",
    ({ questionsAnswers, expected }) => {
        const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
        dispatchStore(init({
            container: "test",
            path: "",
            fondsLearnMore: "",
            fondsSparplanLearnMore: "",
            fondgebundeneLebensversicherungLearnMore: "",
            aktienLearnMore: "",
            zertifikateLearnMore: "",
            ifaLink: "",
        }));
        questionsAnswers.forEach((answer, index) => {
            dispatchStore(setAnswer({ questionId: index + 1, answerId: answer }));
        });

        const { productsWeight } = store.getState().app;
        const sortedProducts = filteredProducts(productsWeight);
        const productsToBeDisplayed = filterByThreshold(sortedProducts);
        const keysResult = productsToBeDisplayed.map((el) => Object.keys(el)[0]);
        expect(keysResult).toEqual(expected);
    },
);
