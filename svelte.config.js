import adapter from '@sveltejs/adapter-static'; // Import the static adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		// other options...
		paths: {
			base: '/mrmoxon.github.io', // replace 'myrepo' with your GitHub repository name
		},
		adapter: adapter({
			pages: 'docs', // Output to 'docs' directory instead of 'build'
			assets: 'docs',
			fallback: null,
			strict: false
		}),
	}
};

export default config;