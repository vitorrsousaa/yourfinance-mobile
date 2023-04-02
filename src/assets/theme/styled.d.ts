import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: {
        900: string;
        800: string;
        700: string;
        600: string;
        300: string;
        200: string;
      };
      green: {
        500: string;
        400: string;
        300: string;
        200: string;
      };
      blue: {
        950: string;
        900: string;
        700: string;
      };
      white: {
        200: string;
        100: string;
      };

      red: {
        700: string;
        600: string;
        400: string;
        300: string;
      };
    };
  }
}
