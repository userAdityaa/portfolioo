import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'max-phone': { max: '600px' },
        'max-ipad': { min: '1000px', max: '1200px' }, 
        'max-mini': { min: '700px', max: '1000px' }, 
      },
    },
  },
  plugins: [],
} satisfies Config;
