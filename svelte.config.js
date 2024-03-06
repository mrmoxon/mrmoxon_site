import adapter from '@sveltejs/adapter-static'; // Import the static adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		// other options...
		paths: {
			base: '', // replace 'myrepo' with your GitHub repository name
		},
		adapter: adapter({
			pages: 'build', // Output to 'docs' directory instead of 'build'
			assets: 'build',
			fallback: null,
			strict: false
		}),
	}
};

export default config;