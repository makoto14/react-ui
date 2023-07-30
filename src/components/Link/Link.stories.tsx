import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

export default {
  title: 'components/Link',
  component: Link,
} as Meta<typeof Link>;

export const Playgrounds: StoryObj<LinkProps> = {
  args: {
    href: 'https://google.com',
    children: 'link',
  },
};

export const onClick: StoryObj<LinkProps> = {
  args: {
    onClick: () => window.open('https://google.com'),
    children: 'link',
  },
};
