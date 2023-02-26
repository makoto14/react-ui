import '@emotion/react';

declare module '@emotion/react' {
  interface Theme {
    colors: {
      // semantic
      primary: ColorPalette;
      neutral: ColorPalette;
      warning: ColorPalette;
      danger: ColorPalette;
      success: ColorPalette;
      // primitive
      grey: ColorScale;
      blue: ColorScale;
      green: ColorScale;
      orange: ColorScale;
      red: ColorScale;
    };
    spacing: {
      base: number;
    };
    radius: {
      base: number;
    };
    boxShadow: {
      // TODO
    };
    font: {
      size: {
        // TODO
      };
    };
  }
}

export type ColorPalette = {
  light: string;
  main: string;
  dark: string;
};

export type ColorScale = {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};
