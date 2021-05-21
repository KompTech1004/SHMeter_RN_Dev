module.exports = {
    "root": true,
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "react-native/react-native": true
    },
    "plugins": ["react", "react-native"],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "settings": {
        "propWrapperFunctions": ["forbidExtraProps"]
    },
    "globals": {
        "jest": true,
        "describe": true,
        "beforeEach": true,
        "it": true,
        "expect": true
    },
    "rules": {
        "no-trailing-spaces": 2,
        "space-before-blocks": 2,
        "no-multi-spaces": 2,
        "space-infix-ops": 2,
        "no-multiple-empty-lines": [2, { "max": 1 }],
        "newline-before-return": 1,
        "newline-after-var": 1,
        "object-curly-spacing": [2, "always"],
        "block-spacing": 2,
        "comma-spacing": 2,
        "arrow-spacing": 2,
        "keyword-spacing": 2,
        "eol-last": 2,
        "quotes": [1, "single", { "allowTemplateLiterals": true }],
        "max-len": [2, 120],
        "indent": [
            2,
            2,
            {
                "SwitchCase": 1
            }
        ],
        "no-unused-vars": 2,
        "no-empty": 2,
        "default-case": 2,
        "no-magic-numbers": [
            2,
            { "ignoreArrayIndexes": true, "ignore": [0, -1, 1, 2, 3, 4, 5, 200, 404, 1024] }
        ],
        "no-tabs": 2,
        "no-case-declarations": 0,
        "no-console": ["error", { "allow": ["error"] }],
        "react-native/no-unused-styles": 2,
        "react-native/no-inline-styles": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/no-string-refs": 0
    }
};
