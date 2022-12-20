import fs from 'fs';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

export default [{
	input: 'src/index.ts',
	output: {
		file: pkg.main,
		format: 'cjs',
		exports: 'named'
	},
	plugins: [
		commonjs(),
		typescript({tsconfig: false, target: "es5"})
	]
}, {
	input: 'src/index.ts',
	output: {
		file: pkg.module,
		format: 'es'
	},
	plugins: [
		typescript({tsconfig: false, target: "es5"})
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
		typescript({tsconfig: false, target: "es5"})
	]
}];
