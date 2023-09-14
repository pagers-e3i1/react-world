import type { Meta } from "@storybook/react";

import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}

export default meta;

export const Default = () => {
  return <Textarea style={{ height: '351px'}}/>
}