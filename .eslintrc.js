module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: "airbnb",
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 8,
        "spacing": 4,
        "sourceType": "module", //"script" or "module"?
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"]
            }
        }
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        "max-len": [2, 120, 4, {"ignoreUrls": true}],
        "quotes": [1, "double", {allowTemplateLiterals: true}],
        "import/prefer-default-export": "off",
        "indent": ["error", 4, { "ignoredNodes": ['JSXElement' ] }],
        "react/jsx-indent" : ["error", 4],
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "off", // Since we do not use prop-types
        "react/require-default-props": "off", // Since we do not use prop-types
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/naming-convention" : [
            "error",
            { "selector": "enum", "format": ["PascalCase"] },
            { "selector": "enumMember", format: ['UPPER_CASE'] },
        ],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react/function-component-definition": [
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
    },
}
