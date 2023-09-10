import { assignInlineVars } from '@vanilla-extract/dynamic';

import { dividerStyle, dividerThemeVars } from "./Divider.css";
import { DividerProps } from "./Divider.types";

const Divider = ({ direction = "horizontal", color = "#E5E5E5", thick = 2 }: DividerProps) => {
  return (
    <div
      className={dividerStyle}
      style={assignInlineVars(dividerThemeVars, {
        color: color,
        width: direction === "horizontal" ? "100%" : `${thick}px`,
        height: direction === "horizontal" ? `${thick}px` : "100%",
      })}
    />
  );
};

export default Divider;
