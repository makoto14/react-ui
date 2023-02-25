import { Theme } from '@emotion/react';
import { ColorScale } from './types';

const WHITE = '#fff';

export const Green = {
  0: WHITE,
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
} as const satisfies ColorScale;

export const Grey = {
  0: WHITE,
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
} as const satisfies ColorScale;

export const Blue = {
  0: WHITE,
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
} as const satisfies ColorScale;

export const Orange = {
  0: WHITE,
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
} as const satisfies ColorScale;

export const Red = {
  0: WHITE,
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
} as const satisfies ColorScale;

const MAIN_COLOR_SCALE = 800;
const SUB_COLOR_SCALE = 100;

export const theme: Theme = {
  colors: {
    primary: {
      main: Blue[MAIN_COLOR_SCALE],
      sub: Blue[SUB_COLOR_SCALE],
    },
    success: {
      main: Green[MAIN_COLOR_SCALE],
      sub: Green[SUB_COLOR_SCALE],
    },
    warning: {
      main: Orange[MAIN_COLOR_SCALE],
      sub: Orange[SUB_COLOR_SCALE],
    },
    danger: {
      main: Red[MAIN_COLOR_SCALE],
      sub: Red[SUB_COLOR_SCALE],
    },
    neutral: {
      main: Grey[MAIN_COLOR_SCALE],
      sub: Grey[SUB_COLOR_SCALE],
    },
    grey: Grey,
    blue: Blue,
    green: Green,
  },
  spacing: {
    base: 8,
  },
  radius: {
    base: 8,
  },
  boxShadow: {},
  font: {
    size: {},
  },
};
