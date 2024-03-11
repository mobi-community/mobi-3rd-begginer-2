import styled, { css } from "styled-components"
import { BORDER_RADIUS, COLOR } from "../../libs/styledComponents/tokens"
import type { $ButtonBaseType, RadiusType, ThemeType } from "./a1Button.type"

export const ThemeCSS = {
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
export const RadiusCSS = {
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
export const ButtonBase = styled.button<$ButtonBaseType>`
  width: fit-content;
  height: fit-content;
  min-width: 5rem;
  min-height: 5rem;
  
  padding: 1rem 1.5rem;

  color: ${COLOR.grayScale.lightGray};
  &:hover{
    color: ${COLOR.grayScale.deepGray};
  }
  &:active{
    color: ${COLOR.grayScale.light};
  }
  
  ${({ theme }) => ThemeCSS[theme as ThemeType]}
  ${({ radius }) => RadiusCSS[radius as RadiusType]}
`