module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1f7a8c",

          "secondary": "#114b5f",

          "accent": "#404040",

          "neutral": "#F2F2F2",

          "base-100": "#FFFFFF",

          "info": "#98A8DD",

          "success": "#1BBB70",

          "warning": "#DF7E07",

          "error": "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
