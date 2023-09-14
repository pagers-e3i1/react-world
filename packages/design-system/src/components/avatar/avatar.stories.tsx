import type { Meta } from "@storybook/react";

import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs']
}

export default meta;

const AVATAR_URL = 'https://api.realworld.io/images/smiley-cyrus.jpeg'

export const Default = () => {
  return <Avatar src={AVATAR_URL} />
}