import { ReactNode } from "react";

import { FontWeightType, TagType, TypographyType } from "./index.type";

interface TextProps {
  tag?: TagType;
  children?: ReactNode;
  typography?: TypographyType;
  fontWeight?: FontWeightType;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const Text = ({
  tag = "span",
  children,
  typography,
  fontWeight,
  color,
  style,
  className,
}: TextProps) => {
  const CustomTag = `${tag}` as keyof JSX.IntrinsicElements;
  return (
    <CustomTag
      style={{ color: color, ...style }}
      className={[
        {
          typography: typography || "body",
          fontWeight: fontWeight || "regular",
        },
        ,
        className,
      ].join(" ")}
    >
      {children}
    </CustomTag>
  );
};

export default Text;
