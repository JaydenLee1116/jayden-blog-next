import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'jayden-0': '#febd57',
        'inflearn-0': '#1fc078',
        'disquiet-0': '#6d55ff',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
