// --------------------------------------------------------------------
// buid tailwind:
// npx tailwindcss-cli@latest build ./src/tailwind.css -o ./styles.css
// --------------------------------------------------------------------
// when buiding tailwind for production:
// module.exports = {
//   purge: {
//     enabled: true, <----- set true to remove unused styles ---------
// --------------------------------------------------------------------

module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // keep original  colors and extend with your own
        "insure-violet": "hsl(256, 26%, 20%)",
        "insure-blue": "hsl(216, 30%, 68%)",
        "insure-dark-violet": "hsl(270, 9%, 17%)",
        "insure-gray-violet": "hsl(273, 4%, 51%)",
        "insure-grey-light": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "dm-serif": ['"DM Serif Display"', "serif"],
        karla: ['"Karla"', "sans-serif"],
      },
    },
  },
  extend: {},

  variants: {
    extend: {
      brightness: ["hover", "focus"],
    },
  },
  plugins: [],
};
