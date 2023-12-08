import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '28rem',
        '144': '32rem',
        '160': '36rem',
        '176': '40rem',
        '192': '44rem',
        '256': '56rem',
      },
      width: {
        '128': '28rem',
        '144': '32rem',
        '160': '36rem',
        '176': '40rem',
        '192': '44rem',
        '256': '56rem',
      },
    },
  },
  plugins: [],
}
export default config
