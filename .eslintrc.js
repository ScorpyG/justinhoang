module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			tsx: true,
			ts: true
		}
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'react-hooks'
	],
	rules: {
		"react/react-in-jsx-scope": "off", // suppress errors for missing 'import React' in files
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
	}
};
