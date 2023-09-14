import { assignInlineVars } from "@vanilla-extract/dynamic";

import { skeletonStyle, skeletonThemeVars } from "./Skeleton.css";

interface SkeletonProps {
  width?: React.CSSProperties["width"];
  height?: React.CSSProperties["height"];
  borderRadius?: React.CSSProperties["borderRadius"];
}

const Skeleton = ({
  width = 10,
  height = 10,
  borderRadius = 50,
}: SkeletonProps) => {
  return (
    <div
      className={skeletonStyle}
      style={assignInlineVars(skeletonThemeVars, {
        width,
        height,
        borderRadius,
      })}
    />
  );
};

export default Skeleton;
