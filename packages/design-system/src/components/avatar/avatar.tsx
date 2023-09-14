import { assignInlineVars } from '@vanilla-extract/dynamic';

import { avatarStyle, avatarThemeVars } from "./avatar.css"
import { AvatarProps } from "./avatar.types"

export const Avatar = ({ src, width=26, height=26, ...rest }: AvatarProps) => {
  return <img src={src} className={avatarStyle} style={assignInlineVars(avatarThemeVars, {
    width: String(width),
    height: String(height),
  })} {...rest} />
}