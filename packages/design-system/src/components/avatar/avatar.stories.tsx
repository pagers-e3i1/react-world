import type { Meta } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs']
}

export default meta;

export const Default = () => {
  return <Avatar src="https://api.realworld.io/images/smiley-cyrus.jpeg" />
}