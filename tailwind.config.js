const animatePlugin = require("tailwindcss-animate");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Update this path if needed
  ],
  darkMode: "class", // Enable 'class' based dark mode (you can also use 'media')
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (phones, mobile)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (laptops, desktops)
        xl: "1280px", // Extra large devices (larger desktops, high-res screens)
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "Arial", "sans-serif"], // Add Helvetica Neue family
      },
      colors: {
        // White Theme Colors
        primary: {
          DEFAULT: "#D946EF", // Fuchsia
          hover: "#C026D3", // Darker Fuchsia
          light: "#F9E8FC", // Soft Fuchsia background
        },
        background: {
          DEFAULT: "#FFFFFF", // White
          secondary: "#F7FAFC", // Light Gray
        },
        text: {
          primary: "#1A202C", // Dark Gray
          secondary: "#718096", // Muted Gray
        },
        border: "#E2E8F0", // Light Gray
        // Dark Theme Colors
        dark: {
          primary: "#D946EF", // Fuchsia
          hover: "#F472B6", // Softer Pinkish Fuchsia
          light: "#4A5568", // Soft background in dark mode
        },
        backgroundDark: {
          DEFAULT: "#1A202C", // Dark Gray
          secondary: "#2D3748", // Lighter Dark Gray
        },
        textDark: {
          primary: "#E2E8F0", // Light Gray
          secondary: "#A0AEC0", // Muted Light Gray
        },
        borderDark: "#4A5568", // Medium Gray
        // Light theme scrollbar colors
        lightScrollbar: "#888",
        lightTrack: "#f1f1f1",

        // Dark theme scrollbar colors
        darkScrollbar: "#555",
        darkTrack: "#333",
      },
      borderRadius: {
        base: "0.375rem", // 6px for buttons/cards
        full: "9999px", // Full rounded for pills
      },
      boxShadow: {
        card: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow
        cardDark: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Dark shadow
      },
    },
  },
  plugins: [animatePlugin, require("tailwind-scrollbar-hide")],
};
