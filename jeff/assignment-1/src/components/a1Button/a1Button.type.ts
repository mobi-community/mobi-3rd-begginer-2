import type { ButtonHTMLAttributes } from "react"
import { RadiusCSS, ThemeCSS } from "./a1Button.style"

export type ThemeType = keyof typeof ThemeCSS
export type RadiusType = keyof typeof RadiusCSS
export type A1ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: ThemeType
  radius?: RadiusType
  label?: string
}
export type $ButtonBaseType = {
  theme: ThemeType
  radius: RadiusType
}
