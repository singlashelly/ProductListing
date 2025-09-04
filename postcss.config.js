module.exports = {
  plugins: [
    require("@tailwindcss/postcss")(), // use the new PostCSS wrapper
    require("autoprefixer"),
  ],
};
