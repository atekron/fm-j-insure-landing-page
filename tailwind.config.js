module.exports = {
  purge: {
    enabled: false,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        insure: "hsl(256, 26%, 20%)",
      },
    },
  },
  extend: {},

  variants: {
    extend: {},
  },
  plugins: [],
};
