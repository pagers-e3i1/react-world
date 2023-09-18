import type { PropsWithChildren } from "react";

import * as ChipStyle from "./chip.css";

interface ChipProps {
  variant: "contained" | "outlined";
  icon?: React.ReactNode;
}

export const Chip = ({
  variant,
  children,
  icon,
}: PropsWithChildren<ChipProps>) => {
  return (
    <>
      <span
        className={[
          ChipStyle.chipContainer,
          variant === "contained" ? ChipStyle.contained : ChipStyle.outlined,
        ].join(" ")}
      >
        {icon}
        {children}
      </span>
    </>
  );
};
