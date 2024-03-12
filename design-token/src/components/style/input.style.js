import styled, { css } from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";
import { fontSize } from "../../constants/design-tokens/font-size";

const ColorCss = {
    neonLigthGrayDark: css`
        color: ${colors.text.default};
        background-color: ${colors.MAIN.default};
        border: 1px solid ${colors.MAIN.neonBlue};
    `,
    neonPinkDark: css`
        color: ${colors.text.secondary};
        background-color: ${colors.MAIN.default};
        border: 1px solid ${colors.border.neonOrange};
    `
}

const SizeCss = {
    small:css`
        padding: ${sizes.input.small.padding};
        font-size: ${fontSize.small};
    `,
    medium:css`
    padding: ${sizes.input.medium.padding};
    font-size: ${fontSize.medium};
`,
large:css`
        padding: ${sizes.input.large.padding};
        font-size: ${fontSize.large};
    `
}

export const SInput = styled.input`
    border-radius: 4px;
    ${({theme}) => ColorCss[theme]}
    ${({size}) => SizeCss[size]}
`;