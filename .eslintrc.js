module.exports = {
    "env": {
        "browser": false,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-tabs": ["error", {allowIndentationTabs: false}],
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error", {"before": true, "after": true}],
        "curly": ["error", "multi-line"],
        "indent": ["error", 2, {"FunctionExpression": {"body": 1, "parameters": 2}}]
    }
};
