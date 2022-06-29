import { Products } from "../components/shared/enums";

const fs = require("fs");
const path = require("path");

export const testCasesJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "importer", "output.json")),
) as Array<any>;

export const testCases = [
    { id: 1, questionsAnswers: [1, 1, 1, 1], expected: [Products.FONDS, Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG] },
    { id: 2, questionsAnswers: [1, 1, 1, 2], expected: [Products.FONDS, Products.AKTIEN] },
    { id: 3, questionsAnswers: [1, 1, 1, 3], expected: [Products.AKTIEN, Products.ZERTIFIKATE] },
    { id: 4, questionsAnswers: [1, 1, 2, 1], expected: [Products.FONDS, Products.ZERTIFIKATE] },
    { id: 5, questionsAnswers: [1, 1, 2, 2], expected: [Products.FONDS, Products.ZERTIFIKATE] },
    { id: 6, questionsAnswers: [1, 1, 2, 3], expected: [Products.ZERTIFIKATE] },
    { id: 7, questionsAnswers: [1, 1, 3, 1], expected: [Products.FONDS, Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG] },
    { id: 8, questionsAnswers: [1, 1, 3, 2], expected: [Products.FONDS, Products.ZERTIFIKATE] },
    { id: 9, questionsAnswers: [1, 1, 3, 3], expected: [Products.ZERTIFIKATE] },
    { id: 10, questionsAnswers: [1, 1, 4, 1], expected: [Products.FONDS, Products.FONDSGEBUNDENE_LEBENSVERSICHERUNG] },
];
