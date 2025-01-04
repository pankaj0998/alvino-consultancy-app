/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: "#EAECF1", // Add custom gray color
          description: "#757575",
          dark: "#252525",
        },
        blue: {
          custom: "#3b97fe",
          title: "#00127f",
          light: "#E8F4FF",
          copyright: "#687799",
          insta: "#6228d7",
          twitter: "#1DA1F2",
        },
        yellow: {
          custom: "#f9ce34",
        },
        pink: {
          custom: "#ee2a7b",
        },
        red: {
          youtube: "#FF0000",
          pinterest: "#E60023",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      // Add your custom styles here
      addComponents({
        ".nav-link": {
          color: "#EAECF1",
          "letter-spacing": "0.05em",
        },
        ".social-media": {
          "@apply text-gray-description bg-gray-custom p-3 rounded-full hover:text-white hover:bg-gray-description":
            {},
          //
        },
      });
    }),
  ],
};
