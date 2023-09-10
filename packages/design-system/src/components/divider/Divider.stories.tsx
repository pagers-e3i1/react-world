import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "components/Divider",
  tags: ['autodocs'],
  component: Divider,
  decorators: [
    (Story) => (
      <div  style={{width:"500px", height:"500px", backgroundColor:"black", display:"flex", justifyContent:"center", alignItems:"center", padding:"20px"}}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const HorizontalDivider: Story = {
  args: {
    direction: "horizontal",
    color: '#E5E5E5',
    thick : 2,
  },
};

export const VerticalDivider: Story = {
  args: {
    direction: "vertical",
    color: '#E5E5E5',
    thick : 2,
  },
};
