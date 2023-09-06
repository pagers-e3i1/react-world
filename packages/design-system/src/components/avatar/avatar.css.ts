import { style } from "@vanilla-extract/css";

export const avatarStyle = style({
  borderRadius: '50px',
  // TODO: 사이즈 유동적으로 변경되도록 변경하기
  height: '26px',
  width: '26px'
})