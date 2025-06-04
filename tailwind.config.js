/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          name: "dark",
          default: true,
          prefersdark: true,
          "color-scheme": "dark",
          "base-100": "#0e0d14",
          "base-200": "#16171f",
          "base-300": "oklch(27% 0.033 256.848)",
          "base-content": "oklch(96% 0.001 286.375)",
          primary: "oklch(12% 0.042 264.695)",
          "primary-content": "oklch(98% 0.022 95.277)",
          secondary: "oklch(27% 0.041 260.031)",
          "secondary-content": "oklch(100% 0 0)",
          accent: "#1977d2",
          "accent-content": "oklch(98% 0 0)",
          neutral: "oklch(65% 0.241 354.308)",
          "neutral-content": "oklch(97% 0.013 17.38)",
          info: "oklch(44% 0.11 240.79)",
          "info-content": "oklch(97% 0.014 254.604)",
          success: "oklch(70% 0.14 182.503)",
          "success-content": "oklch(98% 0.014 180.72)",
          warning: "oklch(79% 0.184 86.047)",
          "warning-content": "oklch(98% 0.026 102.212)",
          error: "oklch(63% 0.237 25.331)",
          "error-content": "oklch(97% 0.014 343.198)",
          border: "1px",
          depth: 1,
          noise: 0,
        },
      },
      {
        light: {
          name: "light",
          default: false,
          prefersdark: false,
          "color-scheme": "light",
          "base-100": "oklch(96% 0.003 264.542)",
          "base-200": "oklch(96% 0.001 286.375)",
          "base-300": "oklch(97% 0 0)",
          "base-content": "oklch(14% 0.005 285.823)",
          primary: "oklch(12% 0.042 264.695)",
          "primary-content": "oklch(98% 0.022 95.277)",
          secondary: "oklch(27% 0.041 260.031)",
          "secondary-content": "oklch(100% 0 0)",
          accent: "oklch(37% 0.146 265.522)",
          "accent-content": "oklch(98% 0 0)",
          neutral: "oklch(65% 0.241 354.308)",
          "neutral-content": "oklch(97% 0.013 17.38)",
          info: "oklch(44% 0.11 240.79)",
          "info-content": "oklch(97% 0.014 254.604)",
          success: "oklch(70% 0.14 182.503)",
          "success-content": "oklch(98% 0.014 180.72)",
          warning: "oklch(79% 0.184 86.047)",
          "warning-content": "oklch(98% 0.026 102.212)",
          error: "oklch(63% 0.237 25.331)",
          "error-content": "oklch(97% 0.014 343.198)",
          border: "1px",
          depth: 1,
          noise: 0,
        },
      },
    ],
    darkTheme: "dark", // sets default dark theme
  },
};
