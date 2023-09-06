import { style } from "@vanilla-extract/css";

// TODO: custom backgroundColor
export const dividerHorizontalStyle = style({
  display: "flex",
  width: "100%",
  height: "2px",
  backgroundColor: "#1A1A1A",
});

export const dividerVerticalStyle = style({
  display: "flex",
  width: "2px",
  height: "100%",
  backgroundColor: "#1A1A1A",
});
