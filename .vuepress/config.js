const playable = require('..');
const pkg = require('../package');

module.exports = {
	title: pkg.name,
	description: pkg.description,
	base: `/${pkg.name}/`,
	themeConfig: {
		nav: [
			{text: 'Home', link: '/'},
			{text: 'API Reference', link: '/docs/'},
			{
				text: 'Classes',
				items: Object.keys(playable).map(name => {
					return {text: name, link: `/docs/classes/${name.toLowerCase()}.html`}
				})
			},
			{text: 'GitHub', link: 'https://github.com/Lanfei/playable.js'},
		],
		sidebar: 'auto'
	}
};
