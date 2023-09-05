import { style, styleVariants } from "@vanilla-extract/css";

export const tabListStyle = style({
  display: "inline-flex",
});

const tabBaseStyle = style({
  padding: "8px 16px",
  backgroundColor: "#fff",
  fontSize: "16px",
  lineHeight: "24px",
  cursor: "pointer",
});

export const tabCustomStyle = styleVariants({
  active: [
    tabBaseStyle,
    {
      borderBottom: "2px solid #5CB85C",
      color: "#5CB85C",
    },
  ],
  inActive: [
    tabBaseStyle,
    {
      color: "#aaa",
      borderBottom: "2px solid transparent",
    },
  ],
});
