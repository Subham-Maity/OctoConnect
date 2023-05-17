/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        sky: {
          300: "#90cdf4",
        },
        indigo: {
          900: "#1a202c",
        },
      },
      // Define the layer for custom classes
      // This is optional but recommended
      // Learn more: https://tailwindcss.com/docs/adding-new-utilities#adding-to-a-new-layer
      layers: {
        custom: ["utilities"],
      },
    },
  },
  plugins: [],
};
