const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      minWidth: {
        20: "5rem",
      },
      maxWidth: {
        72: "18rem",
      },
      screens: {
        xs: "460px",
      },
    },
  },
  plugins: [],
}

module.exports = config
