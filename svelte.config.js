import adapter from '@sveltejs/adapter-static'; // Import the static adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html' // Add this line for SPA behavior
		}),
	}
};

export default config;
