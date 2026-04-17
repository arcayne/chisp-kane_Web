/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F1EA',
        'paper-2': '#EBE6D6',
        ink: '#151411',
        'ink-2': '#2A2824',
        'ink-3': '#5C564C',
        rule: '#D9D3C5',
        accent: '#B4531A',
        'accent-ink': '#5A2A10',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'display-tight': '-0.025em',
        'mono-wide': '0.08em',
      },
      fontSize: {
        'eyebrow': ['0.72rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      maxWidth: {
        'reading': '62ch',
      },
    },
  },
  plugins: [],
};
