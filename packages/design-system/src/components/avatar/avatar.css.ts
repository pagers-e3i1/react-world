import { createThemeContract, style } from "@vanilla-extract/css";

export const avatarThemeVars = createThemeContract({
  width: null,
  height: null,
});

export const avatarStyle = style({
  borderRadius: '50px',
  width: avatarThemeVars.width,
  height: avatarThemeVars.height
})