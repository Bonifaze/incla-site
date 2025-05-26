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
        "incla-black": {
          100: "#0D0D0D",
        },
        "incla-purple": {
          DEFAULT: "#66165A",
        },
        "incla-grey": {
          200: "#D1d1d1",
        },
        "incla-brown": {
          DEFAULT: "#EBCF81",
        },
        "incla-blue": {
          DEFAULT: "#30ADE5",
        },
      },
      backgroundImage: {
        'retreat': 'url(/image/slideshow/1N0A7645.webp)',
        'statue': 'url(/image/statue.jpg)',
        'login-bg': 'url(/image/login-bg.jpg)',
        'slide2' : 'url(/image/slideshow/1N0A7576.webp)',
        'slide3' : 'url(/image/slideshow/1N0A7623.webp)',
        'slide4' : 'url(/image/slideshow/1N0A7613.webp)',
        'slide5' : 'url(/image/slideshow/1N0A7645.webp)',
        'slide6' : 'url(/image/slideshow/1N0A7611.webp)',
        'admit-req' : 'url(/image/slideshow/1N0A7634.webp)',
        'lMasters' : 'url(/image/slideshow/1N0A7579.webp)',
        'cert-course' : 'url(/image/login-bg.webp)',
        'academic-pro' : 'url(/image/AdmissionList.webp)',
        'home-about' : 'url(/image/slideshow/1N0A7625.webp)',
        'contact-image' : 'url(/image/slideshow/20230924_132928.webp)',
        'apply' : 'url(/image/slideshow/20230928_071833.webp)',
        'adList' : 'url(/image/slideshow/DSC07442.webp)',
        'acPro' : 'url(/image/slideshow/DSC05364.webp)',
        'diploma' : 'url(/image/slideshow/1N0A7634.webp)',
        'cert' : 'url(/image/slideshow/DSC07537.webp)',
      },
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
