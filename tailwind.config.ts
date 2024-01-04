import { profile } from 'console'
import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '440px',
      },
      colors:
      {
        secondary:{
        onfoucs: colors.neutral[100],
        hover: colors.neutral[600],
        border: colors.neutral[700],
        text: colors.neutral[200],
        dark: colors.neutral[800],
        ["dark-hover"]: colors.neutral[950]
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero': 'url("/public/profile.jpg")',
      },
    },
  },
  plugins: [],
}
export default config
