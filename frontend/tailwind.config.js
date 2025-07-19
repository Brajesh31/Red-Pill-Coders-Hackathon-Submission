const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "3.5rem", // 56px
              fontWeight: "900",
              lineHeight: "4rem", // 64px
              color: "hsl(var(--foreground))",
            },
            h2: {
              fontSize: "2.875rem", // 46px
              fontWeight: "800",
              lineHeight: "3.25rem", // 52px
              color: "hsl(var(--foreground))",
            },
            h3: {
              fontSize: "2.25rem", // 36px
              fontWeight: "700",
              lineHeight: "2.75rem", // 44px
              color: "hsl(var(--foreground))",
            },
            h4: {
              fontSize: "1.875rem", // 30px
              fontWeight: "600",
              lineHeight: "2.25rem", // 36px
              color: "hsl(var(--foreground))",
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    plugin(function ({ addBase }) {
      addBase({
        h1: {
          "@apply text-[56px] font-extrabold leading-[64px] text-foreground":
            "",
        },
        h2: {
          "@apply text-[46px] font-bold leading-[52px] text-foreground": "",
        },
        h3: {
          "@apply text-[36px] font-semibold leading-[44px] text-foreground": "",
        },
        h4: {
          "@apply text-[30px] font-medium leading-[36px] text-foreground": "",
        },
      });
    }),
  ],
};
