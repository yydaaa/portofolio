export default {
  buildModules: [
    '@nuxt/postcss8', // Required for TailwindCSS
  ],
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
    '@/assets/css/main.css', // Path to your TailwindCSS file
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};
