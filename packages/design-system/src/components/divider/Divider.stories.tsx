import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "components/Divider",
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const HorizontalDivider: Story = {
  render: () => <Divider direction="horizontal" />,
};

export const VerticalDivider: Story = {
  render: () => <Divider direction="vertical" />,
};
