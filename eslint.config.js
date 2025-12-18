const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "commonjs",
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
        rules: {
            "no-unused-vars": "warn", // Warn us if we create variables we don't use
            "no-console": "off",      // Allow console.log (since we use it for the server)
            "no-undef": "error"       // Error if we use a variable that doesn't exist
        },
    },
];