export default {
  plugins: {
    // Tailwind v4 moved the PostCSS plugin to a separate package. Use
    // '@tailwindcss/postcss' so PostCSS (used by Vite) can load Tailwind.
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
