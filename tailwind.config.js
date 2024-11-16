/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "30rem", // 480px = 30rem (16px de base)
        tablet: "48rem", // 768px = 48rem
        desktop: "64rem", // 1024px = 64rem
        largeDesktop: "90rem", // 1440px = 90rem
      }
    },
  },
  plugins: [],
}
