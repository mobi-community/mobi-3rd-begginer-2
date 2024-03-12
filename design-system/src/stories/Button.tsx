import React from "react";
import "./button.css";
import { SIZE } from "../styled-component/tokens/size";
import { COLOR } from "../styled-component/tokens/color";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const { width, height } = SIZE.button[size];
  const buttonStyle = primary ? { backgroundColor: COLOR.main.base } : {};

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor, width, height, ...buttonStyle }}
      {...props}
    >
      {label}
    </button>
  );
};
