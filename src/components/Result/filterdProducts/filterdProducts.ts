import { productPriority } from "../../../data/productData";
import { OneWeight, Weight } from "../../shared/types";

const filteredProducts = (products: Weight): OneWeight[] => productPriority
    .map(
        (productStr: string) => {
            const newObj: Partial<OneWeight> = {};
            newObj[productStr] = products[productStr];
            return newObj as OneWeight;
        },
    )
    .sort(
        (a: Partial<Weight>, b: Partial<Weight>) => (Object.values(b)[0] - Object.values(a)[0]),
    );

export default filteredProducts;
