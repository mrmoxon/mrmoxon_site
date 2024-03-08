import adapter from '@sveltejs/adapter-static';
const config = {
  kit: {
    adapter: adapter({
      // options here
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/blog-olympia' : '',
    },
  },
};
export default config;