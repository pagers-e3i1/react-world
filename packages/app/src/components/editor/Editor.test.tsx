import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";

import * as stories from "./Editor.stories";

const { Default } = composeStories(stories);

it("입력 후 엔터를 누르면 input이 사라지고, tag가 추가된다.", () => {
  render(<Default />);

  const input = screen.getByPlaceholderText(/Enter tags/i);
  userEvent.type(input, "React{enter}");

  expect(screen.getByText("React")).toBeTruthy();
  expect(input).toHaveProperty("value", "");
});

it("tag를 클릭하면 삭제된다.", () => {
  render(<Default />);

  const input = screen.getByPlaceholderText(/Enter tags/i);
  userEvent.type(input, "React{enter}");
  userEvent.click(screen.getByText("React"));
  expect(screen.queryByText("React")).toBeFalsy();
});

it("중복된 tag는 추가되지 않고, input도 비워지지 않는다.", () => {
  render(<Default />);

  const input = screen.getByPlaceholderText(/Enter tags/i);
  userEvent.type(input, "React{enter}");
  userEvent.type(input, "React{enter}");

  expect(screen.getAllByText("React").length).toBe(1);
  expect(input).toHaveProperty("value", "React");
});

it("입력 후 엔터를 누르면 하나의 tag만 추가되는지 검증합니다.", () => {
  render(<Default />);

  const input = screen.getByPlaceholderText(/Enter tags/i);
  userEvent.type(input, "React{enter}Vue{enter}Angular{enter}");

  expect(screen.queryAllByText(/React|Vue|Angular/).length).toBe(3);
});
