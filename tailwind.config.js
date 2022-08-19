// tailwind.config.js
module.exports = {
    content: [
      "./App.{js,ts,jsx,tsx}",
      "./screens/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",

      
    ],
    // ...
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#8358FF',
        'midnight': '#121063',
        'metal': '#F2ECFE',
        'tahiti': '#3ab7bf',
        'silver': '#969696',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'orange': '#FF903F',
        'black': '#4E4E4E',
      },
      
    },
  };