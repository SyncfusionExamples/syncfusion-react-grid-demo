import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Material Design 3 Colors
        primary: '#6750A4',
        'on-surface': '#1C1B1F',
        'on-surface-variant': '#49454E',
        'outline-variant': '#C4C7C5',
        surface: '#FFFFFF',
      },
      fontSize: {
        'sm': ['14px', { lineHeight: '20px', letterSpacing: '0.25px' }],
        'base': ['16px', { lineHeight: '24px', letterSpacing: '0.1px' }],
        'lg': ['18px', { lineHeight: '28px', letterSpacing: '0px' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
      },
      borderRadius: {
        'md3-0': '0px',
        'md3-8': '8px',
        'md3-12': '12px',
        'md3-full': '9999px',
      },
    },
  },
  plugins: [],
}
export default config
