import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';

module.exports = [{
	input: 'src/index.ts',
	output: {
		name: 'playable',
		file: 'dist/playable.js',
		format: 'iife'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false})
	]
}, {
	input: 'src/index.ts',
	output: {
		file: 'dist/playable.common.js',
		format: 'cjs'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false})
	]
}];
