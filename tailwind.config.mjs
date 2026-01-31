/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f7f8',
          100: '#e9eaec',
          200: '#cfd2d7',
          300: '#b2b7bf',
          400: '#8a919c',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        brand: {
          50: '#eef7ff',
          100: '#d7ecff',
          200: '#b7dcff',
          300: '#8cc7ff',
          400: '#61a8ff',
          500: '#3b82f6',
          600: '#2763d4',
          700: '#1d4eb0',
          800: '#1c3d86',
          900: '#182f5d'
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 10px 30px -18px rgba(15, 23, 42, 0.45)',
        lift: '0 18px 40px -28px rgba(15, 23, 42, 0.65)'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};
