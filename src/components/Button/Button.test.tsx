import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { customRender } from '../../test';
import { Button } from './Button';

describe('Button', () => {
  test('button roleとなり取得できること', () => {
    customRender(<Button>button</Button>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  test('button roleとなり取得できること', async () => {
    const onClick = jest.fn();
    customRender(<Button onClick={onClick}>button</Button>);

    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(onClick).toBeCalledTimes(1);
    });
  });
});
