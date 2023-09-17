import { style } from "@vanilla-extract/css";

export const input = style({
  width: "100%",
  padding: "0.75rem 1.5rem",
  fontSize: "1.25rem",
  borderRadius: "0.3rem",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  color: "#55595c",
  lineHeight: 1.25,
  outline: "none",

  selectors: {
    "&:focus": {
      borderColor: "#76aee4",
    },
  },
});
