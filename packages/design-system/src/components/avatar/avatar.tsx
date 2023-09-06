import { avatarStyle } from "./avatar.css"
import { AvatarProps } from "./avatar.types"

export const Avatar = ({ src, ...rest }: AvatarProps) => {
  return <img src={src} className={avatarStyle} {...rest} />
}