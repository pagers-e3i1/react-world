import type { Meta, StoryObj } from "@storybook/react";

import { TagSelector } from "./TagSelector";

const meta: Meta<typeof TagSelector> = {
  title: "Components/TagSelector",
  component: TagSelector,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagSelector>;

export const Default: Story = {
  args: {},
};
