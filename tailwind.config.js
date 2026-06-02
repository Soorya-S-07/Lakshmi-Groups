/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#8B1A1A',
          50: '#FDF2F2',
          100: '#FAE0E0',
          200: '#F4B8B8',
          300: '#EC8080',
          400: '#DF4848',
          500: '#8B1A1A',
          600: '#7A1616',
          700: '#661212',
          800: '#520E0E',
          900: '#3D0B0B',
        },
        brown: {
          DEFAULT: '#4A2C0A',
          light: '#6B3E12',
          dark: '#2E1A06',
        },
        gold: {
          DEFAULT: '#F0A500',
          light: '#F5C040',
          dark: '#C98800',
          50: '#FFFBF0',
          100: '#FFF3CC',
          200: '#FFE499',
          300: '#FFD166',
          400: '#F5C040',
          500: '#F0A500',
          600: '#C98800',
          700: '#A36B00',
          800: '#7D5200',
          900: '#573800',
        },
        veggreen: {
          DEFAULT: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          50: '#F1F8F1',
          100: '#DCEDC8',
        },
        cream: {
          DEFAULT: '#FFFDF5',
          dark: '#FFF8E7',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        lato: ['Lato', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(139, 26, 26, 0.08)',
        'warm-lg': '0 8px 40px rgba(139, 26, 26, 0.12)',
        'gold': '0 4px 24px rgba(240, 165, 0, 0.2)',
        'card': '0 2px 16px rgba(74, 44, 10, 0.08)',
        'card-hover': '0 8px 32px rgba(74, 44, 10, 0.16)',
      },
    },
  },
  plugins: [],
};
