module.exports = {
	'roots': [
		'<rootDir>/src'
	],
	'transform': {
		'^.+\\.tsx?$': 'ts-jest'
	},
	'testRegex': '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	'moduleFileExtensions': [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node'
	],
	'moduleNameMapper': {
		'^.+\\.(css|less|sass|scss)$': 'babel-jest'
	},
	'snapshotSerializers': ['enzyme-to-json/serializer'],
	'setupFilesAfterEnv': ['<rootDir>/src/setupEnzyme.ts']
}
