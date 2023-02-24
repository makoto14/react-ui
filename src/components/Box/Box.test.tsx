import { render, screen } from '@testing-library/react';
import { Button } from '../Button';
import { Box } from './Box';

describe(Button.name, () => {
  test('childrenを表示するか', () => {
    render(<Box>Box</Box>);
    expect(screen.getByText('Box')).toBeInTheDocument();
  });

  test('role, aria-labelを付与できるか', () => {
    render(
      <Box aria-label="ariaLabel" role="cell">
        Box
      </Box>
    );
    expect(
      screen.getByRole('cell', {
        name: 'ariaLabel',
      })
    ).toBeInTheDocument();
  });
});
