import { Meta, StoryFn } from '@storybook/react';
import { Fragment } from 'react';
import { useBoolean } from '../../hooks/useBoolean/useBoolean';
import { Button } from '../Button';
import { Stack } from '../Stack';
import { Dialog } from './Dialog';

export default {
  title: 'components/Dialog',
  component: Dialog,
} as Meta<typeof Dialog>;

export const Base: StoryFn = () => {
  const { bool, setBool, handleTrue, handleFalse } = useBoolean();

  return (
    <Fragment>
      <Button onClick={handleTrue}>Open</Button>
      <Dialog
        open={bool}
        onOpenChange={setBool}
        title="Hello react"
        action={
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <Button
              color="neutral"
              variant="soft"
              onClick={() => handleFalse()}
            >
              Cancel
            </Button>
            <Button color="primary" onClick={() => handleFalse()}>
              OK
            </Button>
          </Stack>
        }
      >
        Hello
      </Dialog>
    </Fragment>
  );
};
