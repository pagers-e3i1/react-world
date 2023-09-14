import { style } from "@vanilla-extract/css";

export const paginationList = style({
  maxWidth: "100%",
  display: "flex",
  paddingLeft: "0",
  marginTop: "1rem",
  marginBottom: "1rem",
  borderRadius: "0.25rem",
  listStyle: "none",
});

export const pageLinkWrapper = style({
  textDecoration: "none",
  cursor: "pointer",
});

export const pageLink = style({
  position: "relative",
  padding: "0.5rem 0.75rem",
  marginLeft: "-1px",
  border: "1px solid #ddd",
  color: "#5CB85C",
  backgroundColor: "#fff",

  selectors: {
    "&:hover": {
      backgroundColor: "#ddd",
      textDecoration: "underline",
    },
  },
});

export const pageLinkActive = style({
  backgroundColor: "#5CB85C",
  borderColor: "#5CB85C",
  color: "#fff",

  selectors: {
    "&:hover": {
      cursor: "default",
      textDecoration: "underline",
      backgroundColor: "#5CB85C",
    },
  },
});
