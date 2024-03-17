import styled, { css } from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";
import { fontSize } from "../../constants/design-tokens/font-size";


const ColorCss = {
    neonGreenDarkRed: css`
        color: ${colors.MAIN.darkRed};
        background-color: ${colors.SUB.neonGreen};
        border: 1px solid ${colors.border.neonOrange};
    `,
    neonOrangeDarkPurple: css`
        color: ${colors.MAIN.darkPurple};
        background-color: ${colors.SUB.neonOrange};
        border: 1px solid ${colors.border.default};
`
}

const SizeCss = {
    small: css`
        padding: ${sizes.select.small};
        font-size: ${fontSize.small};`
    ,
    medium: css`
        padding: ${ sizes.select.medium};
        font-size: ${fontSize.medium};
        `,
    large: css`
        padding: ${sizes.select.large};
        font-size: ${fontSize.large};
    `
        
    
}

export const SSelect = styled.select`
    ${({theme}) => ColorCss[theme]}
    ${({size}) => SizeCss[size]}
`;