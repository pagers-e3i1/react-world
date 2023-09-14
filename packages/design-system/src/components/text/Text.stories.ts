import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

//story 파일 수정중.........

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FontWeightBold: Story = {
  args: {
    fontWeight: "bold",
    children: "Text",
  },
};

export const FontWeightMedium: Story = {
  args: {
    fontWeight: "medium",
    children: "Text",
  },
};

export const FontWeightRegular: Story = {
  args: {
    fontWeight: "regular",
    children: "Text",
  },
};

export const TagH1: Story = {
  args: {
    tag: "h1",
    children: "Text",
  },
};
