import { FC } from 'react';
import { css } from '../../../styled-system/css';
import { VStack } from '../../../styled-system/jsx';

export const Panda: FC = () => {
  return (
    <div>
      <VStack gap={10}>
        <div>stack1</div>
        <div>stack2</div>
      </VStack>
      <span
        className={css({
          backgroundColor: 'hotpink',
        })}
      >
        panda
      </span>
    </div>
  );
};
