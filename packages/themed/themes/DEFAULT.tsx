import type { Theme } from '../Themes';

// export const DEFAULTold = {
//   bgDark: '#111111',
//   bg: '#222222',
//   bgHighlight: '#333333',
//   contentSecondary: '#5e5e5e',
//   base: '#808080',
//   contentPrimary: '#838383',
//   contentEmphasized: '#a0a0a0',
//   fg: '#dfdfdf',
//   fgHighlight: '#eeeeee',
//   yellow: '#b58900',
//   orange: '#cb4b16',
//   red: '#dc322f',
//   magenta: '#d33682',
//   violet: '#6c71c4',
//   blue: '#268bd2',
//   cyan: '#2aa198',
//   green: '#859900',
// } as const,

export const DEFAULT: Theme = {
  color: {
    text: {
      100: '#ffffff',
      200: '#bababa',
      300: '#808080',
      400: '#404040',
      500: '#1b1b1b',
      600: '#0a0a0a',
    },
    surface: {
      100: '#ffffff',
      200: '#cecece',
      300: '#b0b0b0',
      400: '#252525',
      500: '#050505',
    },
    base: {
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
    },
    bottom: {
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
    },
    info: {
      l400: '',
      l300: '',
      l200: '',
      l100: '',
      base: '',
      d100: '',
      d200: '',
      d300: '',
      d400: '',
    },
    warning: {
      l400: '',
      l300: '',
      l200: '',
      l100: '',
      base: '',
      d100: '',
      d200: '',
      d300: '',
      d400: '',
    },
    destructive: {
      l400: '',
      l300: '',
      l200: '',
      l100: '',
      base: '',
      d100: '',
      d200: '',
      d300: '',
      d400: '',
    },
    productive: {
      l400: '#a3eea9',
      l300: '#7ad882',
      l200: '#57cc61',
      l100: '#40be4b',
      base: '#30ad3a',
      d100: '#25a130',
      d200: '#1c9426',
      d300: '#0c5e13',
      d400: '#06470c',
    },
  },
  spacing: {
    rem: {
      100: '0.5rem',
      200: '1rem',
      300: '1.5rem',
      400: '2rem',
      500: '2.5rem',
      600: '3rem',
      700: '3.5rem',
      800: '4rem',
    },
  },

  /** @deprecated below this line */
  content: {
    l400: '#ffffff',
    l300: '#f8f8f8',
    l200: '#eeeeee',
    l100: '#dddddd',
    base: '#cccccc',
    d100: '#a0a0a0',
    d200: '#888888',
    d300: '#808080',
    d400: '#5e5e5e',
  },
  primary: {
    l400: '#70c2fd',
    l300: '#57b2f3',
    l200: '#4aa8eb',
    l100: '#349ae2',
    base: '#1985b8',
    d100: '#0c658f',
    d200: '#065574',
    d300: '#002a46',
    d400: '#050b11',
  },
  secondary: {
    l400: '#555555',
    l300: '#444444',
    l200: '#383838',
    l100: '#333333',
    base: '#282828',
    d100: '#222222',
    d200: '#181818',
    d300: '#111111',
    d400: '#040404',
  },
  info: {
    l400: '',
    l300: '',
    l200: '',
    l100: '',
    base: '',
    d100: '',
    d200: '',
    d300: '',
    d400: '',
  },
  warning: {
    l400: '',
    l300: '',
    l200: '',
    l100: '',
    base: '',
    d100: '',
    d200: '',
    d300: '',
    d400: '',
  },
  destructive: {
    l400: '',
    l300: '',
    l200: '',
    l100: '',
    base: '',
    d100: '',
    d200: '',
    d300: '',
    d400: '',
  },
  productive: {
    l400: '#a3eea9',
    l300: '#7ad882',
    l200: '#57cc61',
    l100: '#40be4b',
    base: '#30ad3a',
    d100: '#25a130',
    d200: '#1c9426',
    d300: '#0c5e13',
    d400: '#06470c',
  },
} as const;