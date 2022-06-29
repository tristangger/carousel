import { Weight } from "../../shared/types";
import { Products } from "../../shared/enums";
import { THRESHOLD } from "../../../data/productThreshold";
import { productData } from "../../../data/productData";

const filterByThreshold = (products: Weight[]): {[key in Products]? : number}[] => {
    const firstProductValue = Object.values(products[0])[0];
    const secondProductValue = Object.values(products[1])[0];

    const differenceBetweenProducts = firstProductValue - secondProductValue;
    if (differenceBetweenProducts > THRESHOLD) return [products[0]];
    productData.find((product) => product.id === Object.keys(products[0])[0]);
    return [products[0], products[1]];
};

export default filterByThreshold;
