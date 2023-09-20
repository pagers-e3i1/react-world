import type { Meta, StoryObj } from "@storybook/react";

import { Editor } from "./Editor";

const meta: Meta<typeof Editor> = {
  title: "Components/Editor",
  component: Editor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Default: Story = {
  args: {},
};
