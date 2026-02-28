import fs from 'fs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const pkg = JSON.parse(fs.readFileSync('./package.json').toString());

export default [{
	input: 'src/index.ts',
	output: {
		file: pkg.main,
		format: 'cjs',
		exports: 'named'
	},
	plugins: [
		typescript({tsconfig: false, target: "es2020", include: ['src/**/*.ts']})
	]
}, {
	input: 'src/index.ts',
	output: {
		file: pkg.module,
		format: 'es'
	},
	plugins: [
		typescript({tsconfig: false, target: "es2020", include: ['src/**/*.ts']})
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
		typescript({tsconfig: false, target: "es2020", include: ['src/**/*.ts']})
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
		typescript({tsconfig: false, target: "es2020", include: ['src/**/*.ts']}),
		terser()
	]
}];
