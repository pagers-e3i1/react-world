import type { Meta, StoryObj } from "@storybook/react";

import TagSelector from "./TagSelector";

const meta: Meta<typeof TagSelector> = {
  title: "components/TagSelector",
  tags: ["autodocs"],
  component: TagSelector,
};

export default meta;
type Story = StoryObj<typeof TagSelector>;

export const Basic: Story = {
  args: {},
};
