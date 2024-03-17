import { SelectHTMLAttributes } from "react"
import styled from "styled-components"
import { COLOR } from "../design"

interface Option {
  name: string
  value: string | number
}
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[]
  themeColor?: ThemeCssType
}

type ThemeCssType = "main" | "mainOppsite"

type SelcetCssProps = {
  themeColor?: ThemeCssType
}

const MBSelect = ({ options, themeColor = "main", ...props }: SelectProps) => {
  return (
    <Select themeColor={themeColor} {...props}>
      {options.map((_, idx) => (
        <option key={idx}>gdgd</option>
      ))}
    </Select>
  )
}

export default MBSelect

const Select = styled.select<SelcetCssProps>`
  width: 20rem;
  height: 4rem;
  border-radius: 2rem;
  padding: 1rem;
  cursor: pointer;
  border: 1px solid
    ${({ themeColor }) => COLOR.theme[themeColor as ThemeCssType].thick};
  background-color: ${({ themeColor }) =>
    COLOR.theme[themeColor as ThemeCssType].light};
  &:hover {
    background-color: ${({ themeColor }) =>
      COLOR.theme[themeColor as ThemeCssType].normal};
  }
`
