import "../css/button.css";
import { COLOR } from "../styled-component/tokens/color";
import { SIZE } from "../styled-component/tokens/size";

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

// 버튼 컴포넌트
export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const buttonSize = SIZE.button[size];

  // primary가 true인 경우 backgroundColor를 COLOR 토큰의 main.base 값으로 설정
  const buttonBackground = primary
    ? { backgroundColor: COLOR.main.light }
    : { backgroundColor: COLOR.main.weight };

  const fontColor = primary
    ? { color: COLOR.main.weight }
    : { color: COLOR.main.light };

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ ...buttonSize, ...buttonBackground, ...fontColor }}
      {...props}
    >
      {label}
    </button>
  );
};
