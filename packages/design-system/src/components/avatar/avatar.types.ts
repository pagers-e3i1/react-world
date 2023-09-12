import { HTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  /** 이미지 url */
  src: string;
  /** 넓이 */
  width?: React.CSSProperties['width'];
  /** 높이 */
  height?: React.CSSProperties['height'];

}