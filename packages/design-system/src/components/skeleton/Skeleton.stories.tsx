import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "components/Skeleton",
  tags: ["autodocs"],
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const AvatarSkeleton: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
      }}
    >
      <Skeleton width={90} height={90} borderRadius={90} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "10px",
        }}
      >
        <Skeleton width={200} height={30} borderRadius={4} />
        <Skeleton width={200} height={30} borderRadius={4} />
      </div>
    </div>
  ),
};
