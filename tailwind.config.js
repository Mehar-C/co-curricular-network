/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutrals (theme-aware, driven by CSS variables)
        cream: 'rgb(var(--cream) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        body: 'rgb(var(--body) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        badge: 'rgb(var(--badge-bg) / <alpha-value>)',
        badgeText: 'rgb(var(--badge-text) / <alpha-value>)',

        // Signature Accent Pop (Option 1: Vermilion Coral)
        coral: {
          DEFAULT: '#F25F5C',
          light: '#F67B79',
          dark: '#D94845',
        },

        // Legacy compat tokens mapped cleanly
        navy: {
          DEFAULT: '#141618',
          light: '#22252A',
        },
        teal: {
          DEFAULT: '#F25F5C',
          light: '#F67B79',
          dark: '#D94845',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(20, 22, 24, 0.05)',
        card: '0 8px 30px -4px rgba(20, 22, 24, 0.08)',
      },
    },
  },
  plugins: [],
}
