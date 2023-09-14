import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tabListStyle = style({
  display: "inline-flex",
});

export const tabStyle = recipe({
  base: {
    padding: "8px 16px",
    backgroundColor: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        borderBottom: "2px solid #5CB85C",
        color: "#5CB85C",
      },
      false: {
        color: "#aaa",
        borderBottom: "2px solid transparent",
      },
    },
  },
});
