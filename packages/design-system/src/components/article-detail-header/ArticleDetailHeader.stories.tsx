import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import ArticleDetailHeader from "./ArticleDetailHeader";

const meta: Meta<typeof ArticleDetailHeader> = {
  title: "components/ArticleDetailHeader",
  tags: ["autodocs"],
  component: ArticleDetailHeader,
  args: {
    title:
      "Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!",
    updatedAt: "2023-09-17T05:12:42.891Z",
    favorited: false,
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

export const FollowingAuthor: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const followingButton = canvas.getByTestId("FollowingButton");

    await step("Click following button to follow", async () => {
      await userEvent.click(followingButton);
      await expect(followingButton).toHaveTextContent("Unfollow");
    });

    await step("Click following button to unfollow", async () => {
      await userEvent.click(followingButton);
      await expect(followingButton).toHaveTextContent("Follow");
    });
  },
};

export const FavoriteArticle: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const favoriteButton = canvas.getByTestId("FavoriteButton");

    await step("Click favorite button to favorite article", async () => {
      await userEvent.click(favoriteButton);
      await expect(favoriteButton).toHaveTextContent("Unfavorite");
    });

    await step("Click favorite button to unfavorite article", async () => {
      await userEvent.click(favoriteButton);
      await expect(favoriteButton).toHaveTextContent("Favorite");
    });
  },
};
