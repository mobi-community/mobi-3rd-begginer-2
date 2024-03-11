import * as S from './a1Button.style'
import type { A1ButtonProps } from "./a1Button.type"


export const A1Button = ({theme='main',radius='middle',label,...rest}:A1ButtonProps) => {
  return (
    <S.ButtonBase theme={theme!} radius={radius} {...rest}>
      {label}
    </S.ButtonBase>
  )
}
