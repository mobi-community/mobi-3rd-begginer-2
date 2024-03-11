import "./box.css";

// 인터페이스를 정의해서 박스 컴포넌트에서 사용할 수 있는 props 정의
interface BoxProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Box = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BoxProps) => {
  const mode = primary ? "storybook-box--primary" : "storybook-box--secondary";
  return (
    <div
      className={["storybook-box", `storybook-box--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </div>
  );
};
