import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

const tsOptions = {
	tsconfig: false,
	target: 'es2020',
	module: 'es2020',
	moduleResolution: 'bundler',
	strict: false,
	declaration: false,
	include: ['src/**/*.ts'],
};

export default [{
	input: 'src/index.ts',
	output: {
		file: pkg.main,
		format: 'cjs',
		exports: 'named'
	},
	plugins: [
		typescript(tsOptions)
	]
}, {
	input: 'src/index.ts',
	output: {
		file: pkg.module,
		format: 'es'
	},
	plugins: [
		typescript(tsOptions)
	]
}, {
	input: 'src/index.ts',
	output: {
		name: 'playable',
		file: pkg.browser,
		format: 'umd',
		exports: 'named'
	},
	plugins: [
		typescript(tsOptions)
	]
}, {
	input: 'src/index.ts',
	output: {
		name: 'playable',
		file: pkg.browser.replace('.js', '.min.js'),
		format: 'umd',
		exports: 'named',
		sourcemap: true
	},
	plugins: [
		typescript(tsOptions),
		terser()
	]
}];
