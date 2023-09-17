import type { Meta, StoryObj } from "@storybook/react";

import ArticleDetailHeader from "./ArticleDetailHeader";

const meta: Meta<typeof ArticleDetailHeader> = {
  title: "components/ArticleDetailHeader",
  tags: ["autodocs"],
  component: ArticleDetailHeader,
  args: {
    title:
      "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
    updatedAt: "2023-09-17T05:12:42.891Z",
    favorited: true,
    favoritesCount: 1853,
    author: {
      username: "Anah Benešová",
      image: "https://api.realworld.io/images/demo-avatar.png",
      following: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailHeader>;

export const Default: Story = {
  render: (args: Parameters<typeof ArticleDetailHeader>[0]) => {
    return <ArticleDetailHeader {...args} />;
  },
};
