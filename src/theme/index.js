import { typographyVariants } from "./typographyVariants";

const colors = {
  background: {
    light: {
      color: '#ffffff',
    },
    main: {
      color: '#f2f2f2',
    },
  },
  borders: {
    main: {
      color: '#f1f1f1',
    },
  },
  primary: {
    main: {
      color: '#d7385e',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#fb7b6b',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#070c0e',
      contrastText: '#fff',
    },
    light: {
      color: '#88989e',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0, // extra small
    sm: 480, // small
    md: 768, // medium
    lg: 992, // large
    xg: 1200, // extra large
  },
  borderRadius: '8px',
  fontFamily: '\'Rubik\', sans-serif',
  transition: '200ms ease-in-out',
}