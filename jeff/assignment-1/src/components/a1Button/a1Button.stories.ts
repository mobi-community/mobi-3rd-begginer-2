import type { Meta, StoryObj } from '@storybook/react';
import { A1Button } from './';

const meta = {
  title: 'A1Button',
  component: A1Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof A1Button>;

export default meta;

type Story = StoryObj<typeof meta>;


export const MainTheme: Story = {
  args: {
    theme: "main",
    label: 'A1Button',
  },
};

export const SubTheme: Story = {
  args: {
    theme: "sub",
    label: 'A1Button',
  },
};
export const SmallRadius: Story = {
  args: {
    radius: "small",
    label: 'A1Button',
  },
};

export const MiddleRadius: Story = {
  args: {
    radius: "middle",
    label: 'A1Button',
  },
};

export const BigRadius: Story = {
  args: {
    radius: "big",
    label: 'A1Button',
  },
};




