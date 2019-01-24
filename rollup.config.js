import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

module.exports = [{
	input: 'src/index.ts',
	output: {
		file: pkg.main,
		format: 'cjs'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false})
	]
}, {
	input: 'src/index.ts',
	output: {
		file: pkg.module,
		format: 'esm'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false})
	]
}, {
	input: 'src/index.ts',
	output: {
		name: 'playable',
		file: pkg.browser,
		format: 'umd'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false})
	]
}];
