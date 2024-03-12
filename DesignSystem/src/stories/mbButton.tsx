import type { ButtonHTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { COLOR } from "../design"

type MBButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: THEME_TYPE
  radius?: RADIUS_TYPE
  text?: string
}

type ButtonCssType = {
  theme?: THEME_TYPE
  radius?: RADIUS_TYPE
}

type THEME_TYPE = "main" | "mainOppsite"
type RADIUS_TYPE = "round" | "rectangle"

const ThemeCss = {
  main: css`
    background-color: ${COLOR.theme.main.light};
    color: ${COLOR.theme.mainOppsite.thick};
    border: 4px solid ${COLOR.theme.mainOppsite.thick};
    &:hover {
      background-color: ${COLOR.theme.main.normal};
      color: ${COLOR.theme.mainOppsite.normal};
    }
    &:active {
      &:hover {
        background-color: ${COLOR.theme.main.thick};
        color: ${COLOR.theme.mainOppsite.light};
      }
    }
  `,
  mainOppsite: css`
    background-color: ${COLOR.theme.mainOppsite.light};
    color: ${COLOR.theme.main.thick};
    border: 4px solid ${COLOR.theme.main.thick};
    &:hover {
      background-color: ${COLOR.theme.mainOppsite.normal};
      color: ${COLOR.theme.main.normal};
    }
    &:active {
      &:hover {
        background-color: ${COLOR.theme.mainOppsite.thick};
        color: ${COLOR.theme.main.light};
      }
    }
  `,
}
const RadiusCss = {
  round: css`
    border-radius: 1000rem;
  `,
  rectangle: css`
    border-radius: none;
  `,
}

const MBButton = ({
  theme = "main",
  radius = "rectangle",
  text,
  ...props
}: MBButtonProps) => {
  return (
    <CustomButton theme={theme} radius={radius} {...props}>
      {text}
    </CustomButton>
  )
}

export default MBButton

const CustomButton = styled.button<ButtonCssType>`
  width: fit-content;
  min-height: 10rem;
  height: fit-content;
  min-height: 5rem;

  padding: 1rem;

  ${({ theme }) => ThemeCss[theme as THEME_TYPE]}
  ${({ radius }) => RadiusCss[radius as RADIUS_TYPE]}
`
