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
        // Brand
        navy: {
          DEFAULT: '#0B2545',
          light: '#1B3A5C',
        },
        teal: {
          DEFAULT: '#24C8B8',
          light: '#4FD8CA',
          dark: '#12A99A',
        },
        coral: {
          DEFAULT: '#F25F73',
          light: '#F6889A',
        },
        gold: {
          DEFAULT: '#F6B93B',
          light: '#FBD07A',
        },
        // Back-compat aliases (legacy tokens remapped onto the new palette)
        sage: {
          DEFAULT: '#24C8B8',
          light: '#4FD8CA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(11, 37, 69, 0.08)',
        card: '0 14px 40px -12px rgba(11, 37, 69, 0.16)',
        glow: '0 12px 32px -8px rgba(36, 200, 184, 0.45)',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(115deg, #0B2545 0%, #12A99A 45%, #24C8B8 65%, #F25F73 100%)',
        'brand-soft':
          'linear-gradient(135deg, rgba(36,200,184,0.12) 0%, rgba(242,95,115,0.10) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
