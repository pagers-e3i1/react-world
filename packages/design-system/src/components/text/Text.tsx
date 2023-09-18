import type { PropsWithChildren } from "react";

import { FontWeightType, TagType, TypographyType } from "./index.type";
import { text } from "./Text.css";

interface TextProps {
  tag?: TagType;
  typography?: TypographyType;
  fontWeight?: FontWeightType;
  color?: string;
  style?: React.CSSProperties;
}
export const Text = ({
  tag = "span",
  children,
  typography = "body",
  fontWeight = "regular",
  color,
  style,
}: PropsWithChildren<TextProps>) => {
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;

  const computedClass = text({
    typography,
    fontWeight,
  });

  return (
    <CustomTag style={{ color: color, ...style }} className={computedClass}>
      {children}
    </CustomTag>
  );
};
