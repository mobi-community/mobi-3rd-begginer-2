import type { HTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { COLOR, FONT_SIZE } from "../design"

type TextCardProps = HTMLAttributes<HTMLDivElement> & {
  theme: ThemeCssType
  size: SizeCssType
  testPosition?: testPositionType
}

type ThemeCssType = "warning" | "positive" | "notice"
type SizeCssType = "small" | "medium" | "large"
type testPositionType = "start" | "center" | "end"

const ThemeCss = {
  warning: css`
    border: 5px solid ${COLOR.system.warning.normal};
    color: ${COLOR.system.warning.thick};
    background-color: ${COLOR.system.warning.light};
  `,
  positive: css`
    border: 5px solid ${COLOR.system.positive.normal};
    color: ${COLOR.system.positive.thick};
    background-color: ${COLOR.system.positive.light};
  `,
  notice: css`
    border: 5px solid ${COLOR.system.notice.normal};
    color: ${COLOR.system.notice.thick};
    background-color: ${COLOR.system.notice.light};
  `,
}

const SizeCss = {
  small: css`
    width: 30rem;
    height: 10rem;
    font-size: ${FONT_SIZE.small};
  `,
  medium: css`
    width: 50rem;
    height: 12rem;
    font-size: ${FONT_SIZE.medium};
  `,
  large: css`
    width: 80rem;
    height: 15rem;
    font-size: ${FONT_SIZE.large};
  `,
}

const TextCard = ({
  theme,
  size = "small",
  testPosition = "center",
  ...props
}: TextCardProps) => {
  return (
    <TextCardWrap
      theme={theme}
      size={size}
      testPosition={testPosition}
      {...props}
    ></TextCardWrap>
  )
}

export default TextCard

const TextCardWrap = styled.div<TextCardProps>`
  min-width: 10rem;
  min-height: 10rem;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: ${({ testPosition }) => testPosition};
  justify-content: center;
  font-weight: 600;
  ${({ theme }) => ThemeCss[theme as ThemeCssType]}
  ${({ size }) => SizeCss[size as SizeCssType]}
`
