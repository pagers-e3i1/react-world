import { assignInlineVars } from "@vanilla-extract/dynamic";
import type { PropsWithChildren } from "react";
import { darkenColor } from "utils/darkenColor";

import * as ButtonStyle from "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  block?: boolean;
  color?: string;
  icon?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "contained" | "outlined" | "link";
}

export const Button = ({
  block = false,
  disabled = false,
  onClick,
  size = "sm",
  variant = "contained",
  icon,
  children,
  color,
  backgroundColor,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const hoverColor = backgroundColor ? darkenColor(backgroundColor) : undefined;

  let initialColor: string;
  let initialBackgroundColor: string;
  let initialHoverColor: string;

  switch (variant) {
    case "contained": {
      initialColor = "#fff";
      initialBackgroundColor = "#5CB85B";
      initialHoverColor = "#4CA34C";
      break;
    }
    case "outlined": {
      initialColor = "#5CB85B";
      initialBackgroundColor = "transparent";
      break;
    }
    case "link": {
      initialColor = "#5CB85B";
      initialBackgroundColor = "";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <span
      className={[
        ButtonStyle.buttonContainer,
        block && ButtonStyle.buttonWFull,
      ].join(" ")}
    >
      <button
        className={ButtonStyle.button({
          size,
          variant,
          block,
        })}
        onClick={onClick}
        disabled={disabled}
        style={assignInlineVars(ButtonStyle.themeVars, {
          colors: {
            color: color || initialColor!,
            backgroundColor: backgroundColor || initialBackgroundColor!,
            hoverColor: hoverColor || initialHoverColor!,
          },
        })}
        {...props}
      >
        {icon}
        {children}
      </button>
    </span>
  );
};
