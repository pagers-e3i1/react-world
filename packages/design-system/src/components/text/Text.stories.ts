import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

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

export const TypographyH1: Story = {
  args: {
    typography: "h1",
    children: "This is a H1 text",
  },
};

export const TypographyBannerTitle: Story = {
  args: {
    typography: "bannerTitle",
    children: "This is a banner title",
  },
};

export const TypographyBannerDetail: Story = {
  args: {
    typography: "bannerDetail",
    children: "This is a banner detail",
  },
};

export const TypographyDate: Story = {
  args: {
    typography: "date",
    children: "01.01.2023",
  },
};

export const TypographyTitle: Story = {
  args: {
    typography: "title",
    children: "This is a title",
  },
};

export const TypographyContent: Story = {
  args: {
    typography: "content",
    children: "This is content text. It should be lighter and easy to read.",
  },
};

export const TypographyArticle: Story = {
  args: {
    typography: "article",
    children: "This is an article text. It's a bit longer and more detailed.",
  },
};

export const ColorCustom: Story = {
  args: {
    color: "#FF5733", // 예시 색상
    children: "This text has a custom color",
  },
};

export const TagH1: Story = {
  args: {
    tag: "h1",
    children: "Text",
  },
};
