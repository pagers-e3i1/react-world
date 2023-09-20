import { style } from "@vanilla-extract/css";

export const editorContainerStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const buttonContainerStyle = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const tagContainerStyle = style({
  marginTop: "0.2rem",
});

export const closeButtonStyle = style({
  marginRight: "0.313rem",
});
