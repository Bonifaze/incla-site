/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "InCLA-black": {
          100: "#0D0D0D",
        },
        "InCLA-purple": {
          DEFAULT: "#66165A",
        },
        "InCLA-grey": {
          200: "#D1d1d1",
        },
        "InCLA-brown": {
          DEFAULT: "#EBCF81",
        },
        "InCLA-blue": {
          DEFAULT: "#30ADE5",
        },
      },
      backgroundImage: {
        // Keep only actively used background images
        'home-about' : 'url(/image/slideshow/1N0A7625.webp)',
        'contact-image' : 'url(/image/slideshow/20230924_132928.webp)',
        'login-bg': 'url(/image/login-bg.jpg)',
      },
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
