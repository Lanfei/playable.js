import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
	test: {
		globals: true,
		setupFiles: ['./test/setup.ts'],
		browser: {
			enabled: true,
			provider: playwright(),
			instances: [
				{ browser: 'chromium' },
				{ browser: 'firefox' },
				{ browser: 'webkit' },
			],
		},
		coverage: {
			provider: 'v8',
			reporter: ['html', 'lcov'],
			reportsDirectory: 'coverage',
		},
	},
});
