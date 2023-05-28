import { screen } from '@testing-library/react';
import { customRender } from '../../test';
import { Box } from './Box';

describe('Box', () => {
  test('childrenを表示するか', () => {
    customRender(<Box>Box</Box>);
    expect(screen.getByText('Box')).toBeInTheDocument();
  });

  test('role, aria-labelを付与できるか', () => {
    customRender(
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
