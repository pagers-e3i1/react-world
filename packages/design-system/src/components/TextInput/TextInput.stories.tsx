import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from ".";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {},
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => {
    return <TextInput {...args} placeholder="UserName" />;
  },
};
