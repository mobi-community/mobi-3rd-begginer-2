import styled from "styled-components";
import { BORDER_RADIUS } from "../styled-component/tokens/borderRadius";
import { COLOR } from "../styled-component/tokens/color";

// 인터페이스를 정의해서 박스 컴포넌트에서 사용할 수 있는 props 정의
interface BoxProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
}

export const Box = ({
  size = "medium",
  backgroundColor,
  label,
  ...props
}: BoxProps) => {
  return (
    <S.StyledBox
      className={`storybook-box storybook-box--${size}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </S.StyledBox>
  );
};

export const StyledBox = styled.div`
  /* font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; */
  /* font-weight: 700; */
  border: 1px solid black;
  border-radius: ${BORDER_RADIUS.round_square};
  display: flex;
  align-items: center;
  color: ${COLOR.grayScale.gray600};
  background-color: ${COLOR.palette.green.light};
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

  /* primary 스타일 */
  &.storybook-box--primary {
    color: white;
    background-color: #1ea7fd;
  }

  /* secondary 스타일 */
  &.storybook-box--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }

  /* small 크기 */
  &.storybook-box--small {
    font-size: 12px;
    width: 24px;
    height: 24px;
    padding: 10px 16px;
  }

  /* medium 크기 */
  &.storybook-box--medium {
    font-size: 16px;
    width: 32px;
    height: 32px;
    padding: 11px 20px;
  }

  /* large 크기 */
  &.storybook-box--large {
    font-size: 20px;
    width: 48px;
    height: 48px;
    padding: 12px 24px;
  }
  /* hover 스타일 */
  &:hover {
    background-color: ${COLOR.palette.purple.light}; /* hover 시 배경색 */
  }
`;

const S = { StyledBox };
