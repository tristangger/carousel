import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styles from "./ProductCard.module.css";
import { ProductData } from "../../../data/productData";
import ButtonRow from "./ButtonRow/ButtonRow";
import { getConfig } from "../../../store/getConfig";

interface ProductCardProps {
    productInfo: ProductData;
    isNarrow: boolean;
    ifaLink: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = (props) => {
    const { productInfo, isNarrow, ifaLink } = props;
    const { imagePath } = useSelector((state) => getConfig(state));

    return (
        <div
            className={`${styles.productCard} ${isNarrow ? styles.mobileLayout : ""}`}
            id={productInfo.id}
        >
            <img
                className={styles.productImage}
                src={`${imagePath}${productInfo.image}`}
                alt={`${productInfo.headline}_image`}
            />
            <div className={styles.productInformation}>
                <h2 className={styles.productHeadline}>
                    {productInfo.headline}
                </h2>
                <p className={`${styles.productDescription}`}>
                    {productInfo.info}
                </p>
                { !isNarrow && (
                    <ButtonRow
                        isNarrow={false}
                        learnMoreLink={productInfo.learnMoreLink}
                        ifaLink={ifaLink}
                        productId={productInfo.id}
                    />
                )}
            </div>
            { isNarrow && (
                <ButtonRow
                    isNarrow
                    learnMoreLink={productInfo.learnMoreLink}
                    ifaLink={ifaLink}
                    productId={productInfo.id}
                />
            )}
        </div>
    );
};

export default ProductCard;
