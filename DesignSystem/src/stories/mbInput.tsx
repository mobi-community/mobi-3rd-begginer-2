import type { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"
import { COLOR, FONT_SIZE } from "../design"

type MBInputProps = InputHTMLAttributes<HTMLInputElement> & {
  purpose?: PURPOSE_TYPE
  hasIcon?: boolean
  hasButton?: boolean
  buttonName?: string
  placeHolder?: string
}

type PURPOSE_TYPE =
  | "search"
  | "resgisterSmall"
  | "resgisterNormal"
  | "resgisterLarge"

type InputCssType = {
  purpose?: PURPOSE_TYPE
}
type ButtonCssType = {
  hasButton?: boolean
  hasIcon?: boolean
}

const InputCss = {
  search: css`
    width: 25rem;
  `,
  resgisterSmall: css`
    width: 20rem;
  `,
  resgisterNormal: css`
    width: 30rem;
  `,
  resgisterLarge: css`
    width: 50rem;
  `,
}

const MBInput = ({
  purpose,
  hasButton = false,
  placeHolder,
  buttonName = "버튼",
  hasIcon = false,
  ...props
}: MBInputProps) => {
  return (
    <Wrapper>
      <CustomInput
        purpose={purpose}
        placeholder={placeHolder || "palceHolder"}
        {...props}
      ></CustomInput>
      {hasButton && (
        <ButtonBase hasIcon={hasIcon}>
          {hasIcon ? (
            <IconBase src="https://svgsilh.com/svg/1093183.svg" />
          ) : (
            buttonName
          )}
        </ButtonBase>
      )}
    </Wrapper>
  )
}
export default MBInput

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CustomInput = styled.input<InputCssType>`
  height: ${FONT_SIZE.small};
  padding: 1rem;
  cursor: pointer;
  border: 1px solid ${COLOR.grayScale[500]};
  border-radius: 1.5rem;
  ${({ purpose }) => InputCss[purpose as PURPOSE_TYPE]}
  &:hover {
    background-color: ${COLOR.theme.main.light};
  }
`
const ButtonBase = styled.button<ButtonCssType>`
  min-width: 2rem;
  min-height: 2rem;
  position: relative;
  right: 3.5rem;
  border: none;
  background-color: transparent;
  &:hover {
    transform: scale(1.2);
    background-color: transparent;
  }
  ${({ hasIcon }) =>
    !hasIcon &&
    css`
      border-radius: 8px;
      border: 1px solid ${COLOR.grayScale[600]};
      &:hover {
        transform: scale(1.2);
        background-color: ${COLOR.theme.mainOppsite.light};
      }
    `}
  cursor: pointer;
`
const IconBase = styled.img`
  width: 2rem;
  height: 2rem;
`
