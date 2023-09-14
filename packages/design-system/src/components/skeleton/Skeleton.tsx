import { assignInlineVars } from "@vanilla-extract/dynamic";

import { skeletonStyle, skeletonThemeVars } from "./Skeleton.css";

interface SkeletonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  borderRadius?: React.CSSProperties["borderRadius"];
}

const Skeleton = ({
  width = "10px",
  height = "10px",
  borderRadius = "50px",
}: SkeletonProps) => {
  return (
    <div
      className={skeletonStyle}
      style={assignInlineVars(skeletonThemeVars, {
        width: String(width),
        height: String(height),
        borderRadius: String(borderRadius),
      })}
    />
  );
};

export default Skeleton;
