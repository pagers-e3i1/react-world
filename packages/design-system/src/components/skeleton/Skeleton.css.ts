import { createThemeContract, keyframes, style } from "@vanilla-extract/css";

export const skeletonThemeVars = createThemeContract({
  width: null,
  height: null,
  borderRadius: null,
});

const pulse = keyframes({
  "0%": { opacity: 1 },
  "50%": { opacity: 0.5 },
  "100%": { opacity: 1 },
});

export const skeletonStyle = style({
  width: skeletonThemeVars.width,
  height: skeletonThemeVars.height,
  borderRadius: skeletonThemeVars.borderRadius,
  backgroundColor: "#E5E5E5",
  animation: `${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
});
