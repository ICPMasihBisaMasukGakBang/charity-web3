/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "success": "#009A5E",
        "muted": "#828282",
        "active": "#fff"
      },
      backgroundColor: {
        "success": "#009A5E",
        "primary": "#fff9f9",
        "red-orange": "#FD5A47",
        "muted": " #D9D9D9"
      },
      fontFamily: {
        "press-start-2p": "__Press_Start_2P_b676d4",
      },
    },
  },
  plugins: [],
};
