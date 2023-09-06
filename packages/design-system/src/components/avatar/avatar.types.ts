import { HTMLAttributes } from "react";

export interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  /** 이미지 url */
  src: string;
}