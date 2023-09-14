import type { Meta, StoryObj } from "@storybook/react";
import { Pagination, usePagination } from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    itemsPerPage: 3,
    totalItems: 30,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args: Parameters<typeof Pagination>[0]) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { currentPage, onCurrenPageChange } = usePagination(1);
    return (
      <Pagination
        {...args}
        onChange={onCurrenPageChange}
        currentPage={currentPage}
      />
    );
  },
};
