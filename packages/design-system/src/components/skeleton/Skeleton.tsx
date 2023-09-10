import { assignInlineVars } from "@vanilla-extract/dynamic";

import { skeletonStyle, skeletonThemeVars } from "./Skeleton.css";
import { SkeletonProps } from "./Skeleton.types";

const Skeleton = ({
  width = 10,
  height = 10,
  borderRadius = 50,
}: SkeletonProps) => {
  return (
    <div
      className={skeletonStyle}
      style={assignInlineVars(skeletonThemeVars, {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
      })}
    />
  );
};

export default Skeleton;
