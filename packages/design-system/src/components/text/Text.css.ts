import { recipe } from "@vanilla-extract/recipes";

export const text = recipe({
  base: {
    letterSpacing: "-0.005em",
    margin: "0.67em 0",
    fontWeight: 500,
    lineHeight: 1.1,
  },

  variants: {
    fontWeight: {
      bold: {
        fontWeight: "700",
      },
      medium: {
        fontWeight: "500",
      },
      regular: {
        fontWeight: "400",
      },
    },
    typography: {
      h1: {
        fontSize: "2.5rem",
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.75rem",
      },
      h4: {
        fontSize: "1.5rem",
      },
      h5: {
        fontSize: "1.25rem",
      },
      h6: {
        fontSize: "1rem",
      },
      body: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      p: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
      },
      bannerTitle: {
        fontSize: "3.5rem",
        fontWeight: "700",
        lineHeight: "4rem",
        textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
      },
      bannerDetail: {
        fontSize: "2.8rem",
        fontWeight: "600",
        lineHeight: "4rem",
        textShadow: "0px 1px 3px rgba(0, 0, 0, 0.3)",
      },
      date: {
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
      title: {
        fontSize: "1.5rem",
        fontWeight: "600",
        lineHeight: "1.1rem",
      },
      content: {
        fontWeight: "300",
        fontSize: "1rem",
        lineHeight: "1.3rem",
      },
      article: {
        fontSize: "1.2rem",
        lineHeight: "1.8rem",
      },
      span: {
        fontSize: "0.8rem",
        fontWeight: "300",
        lineHeight: "1.5rem",
        verticalAlign: "middle",
      },
    },
  },
});
