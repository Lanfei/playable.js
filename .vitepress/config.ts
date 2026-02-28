import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vitepress';
import pkg from '../package.json';

export default defineConfig({
	title: pkg.name,
	description: pkg.description,
	base: `/${pkg.name}/`,
	rewrites: {
		'README.md': 'index.md',
		'docs/README.md': 'docs/index.md',
		'examples/README.md': 'examples/index.md',
	},
	themeConfig: {
		nav: [
			{text: 'API Reference', link: '/docs/'},
			{
				text: 'Classes',
				items: fs
					.readdirSync(path.resolve(process.cwd(), 'docs/classes'))
					.map(f => ({text: f.replace('.md', ''), link: `/docs/classes/${f}`}))
			},
			{text: 'Examples', link: '/examples/'},
			{text: 'GitHub', link: 'https://github.com/Lanfei/playable.js'},
		]
	},
});
