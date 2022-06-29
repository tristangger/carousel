const xlsx = require("node-xlsx").default;
const path = require("path");
const fs = require("fs");

const EXCEL_COLUMN = Object.freeze({
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
});

const productPriority = [
    "Fonds",
    "Fondssparplan",
    "Fondgebundene Lebensversicherung",
    "Aktien",
    "Zertifikate",
];

// Parse a file
const workSheetsFromFile = xlsx.parse(path.join(__dirname, "test-cases.xlsx"));

// Test Cases Sheet
const testCasesSheet = workSheetsFromFile.filter((sheet) => sheet.name === "Ergebnisse")[0].data;

let questionsTestCases = [];

// Block startings
testCasesSheet.forEach((row, index) => {
    if (typeof row[EXCEL_COLUMN.A] === "number") {
        const values = [
            row[EXCEL_COLUMN.B].charAt(1),
            row[EXCEL_COLUMN.C].charAt(1),
            row[EXCEL_COLUMN.D].charAt(1),
            row[EXCEL_COLUMN.E].charAt(1),
        ].map((val) => {
            switch (val) {
            case "a":
                return 1;
            case "b":
                return 2;
            case "c":
                return 3;
            case "d":
                return 4;
            default:
                return 0;
            }
        });
        questionsTestCases.push({ id: row[0], questionsAnswers: values, row: index });
    }
});

// Add Answers
questionsTestCases = questionsTestCases
    .map((q) => {
        const { row } = q;
        const result = { ...q };
        const answers = [];
        for (let i = 1; i <= 6; i += 1) {
            if (testCasesSheet[row + i][EXCEL_COLUMN.L] !== undefined) {
                const answer = {
                    answer: testCasesSheet[row + i][EXCEL_COLUMN.L],
                    value: testCasesSheet[row + i][EXCEL_COLUMN.K],
                };
                answers.push(answer);
            }
        }
        answers.sort((a, b) => b.value - a.value);
        if (answers.length <= 2) {
            const products = answers.map((a) => a.answer.trim());
            result.expected = productPriority.filter((product) => products.includes(product));
        }
        return result;
    })
    .filter((q) => q.expected);

// Print output
fs.writeFile(
    path.join(__dirname, "output.json"),
    JSON.stringify(questionsTestCases, null, 4),
    "utf8",
    (err) => {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
        return 0;
    },
);
