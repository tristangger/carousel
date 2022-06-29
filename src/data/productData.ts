import { Products } from "../components/shared/enums";
import { ProductPriority } from "../components/shared/types";

export interface ProductData {
    readonly id: string,
    readonly headline: string,
    readonly info: string,
    readonly image: string,
    readonly learnMoreLink: string,
}

export const productData: ReadonlyArray<ProductData> = [
    {
        id: Products.ZERTIFIKATE,
        headline: "Zertifikate",
        info: `Zertifikate sind so vielseitig wie ihre Einsatzmöglichkeiten. Bereits mit kleinen Beträgen 
        partizipieren Sie von bestimmten Marktentwicklungen.`,
        image: "/images/p1_zertifikate.svg",
        learnMoreLink: "",
    },
    {
        id: Products.AKTIEN,
        headline: "Aktien",
        info: `Mit dem Kauf einer Aktie beteiligen Sie sich am Erfolg eines Unternehmens. Besonders in Zeiten 
        niedriger Zinsen ist der Aktienkauf eine interessante Sparalternative.`,
        image: "/images/p2_aktien.svg",
        learnMoreLink: "",
    },
    {
        id: Products.FONDS,
        headline: "Fonds",
        info: `Mit Fonds investieren Sie zum Beispiel in Staatsanleihen, Aktien oder Immobilien – für jeden 
        Anlagewunsch gibt es passende Fonds.`,
        image: "/images/p3_fonds.svg",
        learnMoreLink: "",
    },
    {
        id: Products.FONDSSPARPLAN,
        headline: "Fondssparplan",
        info: `Beim Fondssparen zahlen Sie regelmäßig Geld in einen Fonds ein. So haben Sie die Chance, selbst mit 
        kleineren Beträgen langfristig Kapital aufzubauen.`,
        image: "/images/p4_fondssparplan.svg",
        learnMoreLink: "",
    },
    {
        id: Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG,
        headline: "Fondsgebundene Lebensversicherung",
        info: `Mit einer fondsgebundenen Lebensversicherung kombinieren Sie Versicherungsschutz mit den 
        Gewinnchancen von Investmentfonds.`,
        image: "/images/p5_fondsgebundene_LV.svg",
        learnMoreLink: "",
    },
];

export const productPriority: ProductPriority = [
    Products.FONDS,
    Products.FONDSSPARPLAN,
    Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG,
    Products.AKTIEN,
    Products.ZERTIFIKATE,
];

export default { productData, productPriority };
