module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  plugins: [require("./node_modules/tw-elements/plugin.cjs")],
  darkMode: "class"
};