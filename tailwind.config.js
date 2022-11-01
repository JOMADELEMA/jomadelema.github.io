/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "f-bg": "#FAFAFA",
        "fdark-bg": "#292929",
        "f-hover1": "#F5F5F5",
        "fdark-hover1": "#3D3D3D",
        "f-pressed": "#E0E0E0",
        "fdark-pressed": "#1F1F1F",
        "f-selected": "#EBEBEB",
        "fdark-selected": "#383838",
      },
      colors: {
        "f-green-bg1": "#F1FAF1",
        "fdark-green-bg1": "#052505",
        "f-green-bg2": "#9FD89F",
        "fdark-green-bg2": "#094509",
        "f-green-bg3": "#107C10",
        "fdark-green-bg3": "#107C10",
        "f-green-fg1": "#0E700E",
        "fdark-green-fg1": "#54B054",
        "f-green-fg2": "#094509",
        "fdark-green-fg2": "#9FD89F",
        "f-green-fg3": "#107C10",
        "fdark-green-fg3": "#359B35",
      },
      height: {
        section_container: "90%",

      },
      boxShadow: {
        // "f-2": "0 0 2px rgba(0,0,0,0.12) 0 1px 2px rgba(0,0,0,0.14)",
        // "fdark-2": "0 0 2px rgba(0,0,0,0.24) 0 1px 2px rgba(0,0,0,0.28)",
        // "f-4": "0 0 2px rgba(0,0,0,0.12) 0 2px 4px rgba(0,0,0,0.14)",
        // "fdark-4": "0 0 2px rgba(0,0,0,0.24) 0 2px 4px rgba(0,0,0,0.28)",
        // "f-8": "0 0 2px rgba(0,0,0,0.12) 0 4px 8px rgba(0,0,0,0.14)",
        // "fdark-8": "0 0 2px rgba(0,0,0,0.24) 0 4px 8px rgba(0,0,0,0.28)",
        // "f-16": "0 0 2px rgba(0,0,0,0.12) 0 8px 16px rgba(0,0,0,0.14)",
        // "fdark-16": "0 0 2px rgba(0,0,0,0.24) 0 8px 16px rgba(0,0,0,0.28)",
      },
      gridTemplateRows: {
        //grid para layout
        joma6: "4fr 1fr 1fr",
      },
      flex: {
        25: "0 0 25%",
        50: "0 0 50%",
        100: "0 0 100%",
      },
      maxWidth: {
        25: "25%",
        50: "50%",
        75: "75%",
        100: "100%",
      },
      screens: {
        // phone_portrait: "320px",
        // // // => @media (min-width: 320px) { ... }
        // phone_landscape: "480px",
        // // => @media (min-width: 480px) { ... }
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
