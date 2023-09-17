import { style } from "@vanilla-extract/css";

export const articleHeaderContainer = style({
  padding: "2rem 1.5rem 2rem 1.5rem",
  backgroundColor: "#333",
});

export const articleHeaderTitle = style({
  color: "white",
});

export const articleMeta = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const authorWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const authorInfo = style({
  display: "flex",
  flexDirection: "column",
  marginLeft: "0.5rem",
  color: "white",
});

export const authorUserName = style({
  color: "white",
  textDecoration: "none",
});

export const articleButtons = style({
  display: "flex",
  columnGap: "1rem",
});
