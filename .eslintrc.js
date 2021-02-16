module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:json/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'tsConfigRootDir': './',
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'prettier'
	],
	'rules': {
		'@typescript-eslint/no-var-requires': 0,
		'linebreak-style': [
			'error',
			'unix'
		],
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single',
			{ 'allowTemplateLiterals': true }
		],
		'semi': [
			'error',
			'never'
		]
	}
}
