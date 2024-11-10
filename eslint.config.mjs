import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        rules: {
            quotes: ["error", "double"],
            "object-curly-spacing": ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],
            semi: ["error", "always"],
            "no-unused-vars": "error",
            "max-len": ["error", { code: 76, ignoreUrls: true }],
            indent: ["error", 4],
        },
    },
];
