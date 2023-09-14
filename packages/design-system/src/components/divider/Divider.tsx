import { assignInlineVars } from '@vanilla-extract/dynamic';

import { dividerStyle, dividerThemeVars } from "./Divider.css";
import { DividerProps } from "./Divider.types";

const Divider = ({ direction = "horizontal", color = "#E5E5E5", thickness = 2 }: DividerProps) => {
  return (
    <div
      className={dividerStyle}
      style={assignInlineVars(dividerThemeVars, {
        color: color,
        width: direction === "horizontal" ? "100%" : `${thickness}px`,
        height: direction === "horizontal" ? `${thickness}px` : "100%",
      })}
    />
  );
};

export default Divider;
