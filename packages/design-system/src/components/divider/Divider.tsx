import { dividerHorizontalStyle, dividerVerticalStyle } from "./Divider.css";
import { DividerProps } from "./Divider.types";

const Divider = ({ direction = "horizontal" }: DividerProps) => {
  return (
    <div
      className={
        direction === "horizontal"
          ? dividerHorizontalStyle
          : dividerVerticalStyle
      }
    />
  );
};

export default Divider;
