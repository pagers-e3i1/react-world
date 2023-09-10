import { createThemeContract, style } from "@vanilla-extract/css";

export const dividerThemeVars = createThemeContract({
  color: null,
  width: null,
  height: null,
});

export const dividerStyle = style({
  width: dividerThemeVars.width,
  height: dividerThemeVars.height,
  backgroundColor: dividerThemeVars.color,
});

