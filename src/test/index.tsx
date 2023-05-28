import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { theme } from '../theme';

export const customRender = (component: ReactNode) => {
  render(<>{component}</>, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
  });
};
