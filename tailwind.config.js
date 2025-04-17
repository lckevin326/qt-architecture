/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'qt': {
          'bg': 'var(--qt-bg-color)',
          'control-bg': 'var(--qt-control-bg)',
          'highlight': 'var(--qt-highlight-color)',
          'highlight-light': 'var(--qt-highlight-light)',
          'text': 'var(--qt-text-color)',
          'text-light': 'var(--qt-text-light)',
          'border': 'var(--qt-border-color)',
          'menu-hover': 'var(--qt-menu-hover)',
          'success': 'var(--qt-success-color)',
          'warning': 'var(--qt-warning-color)',
          'danger': 'var(--qt-danger-color)',
        }
      },
      spacing: {
        'qt': {
          '1': '2px',
          '2': '4px',
          '3': '6px',
          '4': '8px',
          '5': '10px',
          '6': '12px',
          '8': '16px',
          '10': '20px',
        }
      },
      borderRadius: {
        'qt': '2px',
      },
      fontSize: {
        'qt': {
          'xs': '11px',
          'sm': '12px',
          'base': '13px',
          'lg': '14px',
          'xl': '16px',
          '2xl': '18px',
        }
      },
    },
  },
  plugins: [],
}

