import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import { it } from "vitest";

import * as stories from "./TagSelector.stories";

const { Default } = composeStories(stories);

it("텍스트 입력 후 엔터를 누르면 input이 사라지고, tag가 추가된다.", () => {
  render(<Default />);
});

it("tag의 x 버튼을 클릭하면 삭제된다.", () => {
  render(<Default />);
});

it("중복된 tag는 추가되지 않고, input도 비워지지 않는다.", () => {
  render(<Default />);
});

it("입력 후 엔터를 누르면 하나의 tag만 추가된다.", () => {
  render(<Default />);
});
