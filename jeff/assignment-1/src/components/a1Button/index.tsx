import type { ButtonHTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { BORDER_RADIUS, COLOR } from "../../libs/styledComponents/tokens"

type ThemeType = keyof typeof ThemeCSS
type RadiusType = keyof typeof RadiusCSS

type A1ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ThemeType
  radius?: RadiusType
  label?: string
}

type $ButtonBase = {
  theme: ThemeType
  radius: RadiusType
}


export const A1Button = ({theme='main',radius='middle',label,...rest}:A1ButtonProps) => {
  return (
    <S.ButtonBase theme={theme!} radius={radius} {...rest}>
      {label}
    </S.ButtonBase>
  )
}

const ThemeCSS = {
  main: css`
    background-color: ${COLOR.brand.main.base};
    &:hover{
      background-color: ${COLOR.brand.main.light};
    }
    &:active{
      background-color: ${COLOR.brand.main.deep};
    }
  `,
  sub: css`
    background-color: ${COLOR.brand.sub.base};
    &:hover{
      background-color: ${COLOR.brand.sub.light};
    }
    &:active{
      background-color: ${COLOR.brand.sub.deep};
    }
  `
}
const RadiusCSS = {
  small: css`
    border-radius: ${BORDER_RADIUS.small};
  `,
  middle: css`
    border-radius: ${BORDER_RADIUS.middle};
  `,
  big: css`
    border-radius: ${BORDER_RADIUS.big};
  `
}
const ButtonBase = styled.button<$ButtonBase>`
  width: fit-content;
  height: fit-content;
  min-width: 5rem;
  min-height: 5rem;
  
  padding: 1rem 1.5rem;

  color: ${COLOR.grayScale.lightGray};
  &:hover{
    color: ${COLOR.grayScale.light};
  }
  &:active{
    color: ${COLOR.grayScale.deepGray};
  }
  
  ${({ theme }) => ThemeCSS[theme as ThemeType]}
  ${({ radius }) => RadiusCSS[radius as RadiusType]}
`
const S = {
  ButtonBase
}