import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-100": "#D8E9E4",
        "green-300": "#2B5F44",
        "green-500": "#243831",
        success: "#49A569",
        golden: "#C5A365",
        "gray-100": "#BBC2C0",
        "gray-300": "#939494",
      },
      fontFamily: {
        castoro: ["Castoro", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
