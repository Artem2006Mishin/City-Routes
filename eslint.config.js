import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
	{ ignores: ["dist/**", "node_modules/**"] },

	js.configs.recommended,
	react.configs.flat.recommended,
	react.configs.flat["jsx-runtime"],
	reactHooks.configs.flat.recommended,

	{
		settings: {
			react: { version: "detect" },
		},
	},

	{
		files: ["**/*.{js,jsx}"],
		ignores: ["eslint.config.js", "vite.config.js"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: { ...globals.browser },
		},
		rules: {
			"react/prop-types": "off",
			"no-unused-vars": "warn",
			semi: ["warn", "always"],
			quotes: ["warn", "double"],
		},
	},

	{
		files: ["eslint.config.js", "vite.config.js"],
		languageOptions: {
			globals: { ...globals.node },
		},
	},
];
