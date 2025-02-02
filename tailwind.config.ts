import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-[url('/assets/shop-hero-1-product-slide-1.jpg')]"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "400px", // Custom screen size for 400px
      },
      fontFamily: {
        poppins: "var(--font-poppins), sans-serif", // Use Poppins
      },
    },
  },
  plugins: [],
} satisfies Config;
