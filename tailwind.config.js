/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: "#EAECF1", // Add custom gray color
          description: "#757575",
        },
        blue: {
          custom: "#3b97fe",
          title: "#00127f",
        },
      },
      borderColor: {
        gray: {
          custom: "#757575",
        },
      },
    },
  },
  plugins: [],
};
