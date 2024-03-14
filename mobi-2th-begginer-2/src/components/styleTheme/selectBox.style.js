import styled, { css } from "styled-components";
import { COLORS } from "../../designToken/color";
import { SIZES } from "../../designToken/size";

const SelectCss = {
    mainPurple: {
        css: css`
            background-color: ${COLORS.MAIN.base};
            color: ${COLORS.SYSTEM.black};
            border: ${COLORS.MAIN.base};
        `,
    },
    lightPeach: {
        css: css`
            background-color: ${COLORS.PALLETE.peach.light};
            color: ${COLORS.SYSTEM.black};
            border: ${COLORS.PALLETE.peach.light};
        `,
    },
};
export const StyleSelect = styled.select`
    border-radius: 10px;
    cursor: pointer;
    ${({ color }) => SelectCss[color].css};
    ${SIZES.SELECT.medium};
`;
