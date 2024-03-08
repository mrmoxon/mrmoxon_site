import adapter from '@sveltejs/adapter-static';
export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    // Ensure paths are relative for GitHub Pages
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/' : '',
    },
    // Other configurations...
  },
};
