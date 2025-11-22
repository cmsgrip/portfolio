/** @type {import('tailwindcss').Types.Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        accent: '#38BDF8',
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        typewriter: {
          from: { width: '0' },
          to: { width: '11ch' },
        },
        blink: {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#38BDF8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}