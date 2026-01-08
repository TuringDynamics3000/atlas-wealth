/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
    },
    fontSize: {
      xs: ['var(--text-xs)', 'var(--leading-tight)'],
      sm: ['var(--text-sm)', 'var(--leading-normal)'],
      base: ['var(--text-base)', 'var(--leading-normal)'],
      lg: ['var(--text-lg)', 'var(--leading-relaxed)'],
      xl: ['var(--text-xl)', 'var(--leading-relaxed)'],
    },
    extend: {
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
        10: 'var(--space-10)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
      },
    },
  },
  plugins: [],
}
