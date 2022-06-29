import React, { FunctionComponent, useMemo } from "react";
import { useSelector } from "react-redux";
import { getConfig } from "../../store/getConfig";
import filteredProducts from "./filterdProducts/filterdProducts";
import filterByThreshold from "./filterByThreshold/filterByThreshold";
import HeaderContainer from "../shared/uiElements/HeaderContainer/HeaderContainer";
import Container from "../shared/uiElements/Container/Container";
import ProductCard from "./ProductCard/ProductCard";
import { ProductData, productData } from "../../data/productData";
import objectToIfa from "../shared/utils/objectToIfa";
import linkValidator from "./ProductCard/ButtonRow/utils/linkValidator";

const iconZielscheibe = "/images/icon_zielscheibe.svg";

const Result: FunctionComponent = () => {
    const {
        step,
        productsWeight,
        windowWidth,
        learnMoreLinks,
        questionsAnswer,
        openAnswer,
        ifaLink,
    } = useSelector((state) => getConfig(state));

    const mappedQuestionAnswer = questionsAnswer.map(encodeURIComponent);
    const mobileBreakPoint = 600;
    const headerText = "Folgende Produktkategorien entsprechen Ihren Auswahlkriterien:*";
    const sortedProducts = filteredProducts(productsWeight);

    const productsToBeDisplayed: (ProductData | undefined)[] = useMemo(() => filterByThreshold(sortedProducts)
        .map((el) => Object.keys(el)[0])
        .map((el) => productData.find((product) => product.id === el))
        .map(
            (product) => {
                if (product) {
                    return {
                        ...product,
                        learnMoreLink: learnMoreLinks[product.id],
                    };
                }
                return undefined;
            },
        ), [sortedProducts, learnMoreLinks]);

    const ifaString = useMemo(() => objectToIfa({
        q1: mappedQuestionAnswer[0],
        q2: mappedQuestionAnswer[1],
        q3: mappedQuestionAnswer[2],
        q4: mappedQuestionAnswer[3],
        q5: openAnswer.encoded,
        r1: encodeURIComponent(productsToBeDisplayed[0]?.id || ""),
        r2: encodeURIComponent(productsToBeDisplayed[1]?.id || ""),
    }), [mappedQuestionAnswer, openAnswer, productsToBeDisplayed]);
    const contactLinkValidated = linkValidator(ifaLink);
    const preparedIfaURI: string = `${contactLinkValidated}?ifa=${ifaString}`;

    return (
        <Container asterisk>
            <HeaderContainer key={step} imgPath={iconZielscheibe} headerText={headerText} />
            <div>
                {productsToBeDisplayed.map((el: ProductData|undefined) => {
                    if (el) {
                        return (
                            <ProductCard
                                productInfo={el}
                                isNarrow={windowWidth < mobileBreakPoint}
                                ifaLink={preparedIfaURI}
                                key={el.id}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </Container>
    );
};

export default Result;
