module.exports = function (config) {
	config.set({
		browsers: ['Chrome', 'Firefox'],
		files: ['src/**/*.ts', 'test/**/*.ts', {pattern: 'test/fixtures/*', included: false}],
		reporters: ['mocha', 'karma-typescript'],
		frameworks: ['mocha', 'karma-typescript'],
		preprocessors: {'**/*.ts': 'karma-typescript'},
		karmaTypescriptConfig: {
			reports: {
				html: 'coverage',
				lcovonly: {
					directory: 'coverage',
					filename: 'lcov.info',
				}
			}
		}
	});
};
