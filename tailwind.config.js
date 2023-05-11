/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "280px",
      ip: "320px",
      sg: "360px",
      os: "412px",
      sp: "430px",
      is: "540px",
      sm: "640px",
      md: "768px",
      ml: "820px",
      mg: "912px",
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1429px",
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
