import styled, { css } from "styled-components";
import { COLORS } from "../../designToken/color";
import { SIZES } from "../../designToken/size";

const SelectCss = {
    mainPurple: {
        css: css`
            background-color: ${COLORS.MAIN[200]};
            color: ${COLORS.SYSTEM.black};
            border: ${COLORS.MAIN[200]};
        `,
    },
    lightPeach: {
        css: css`
            background-color: ${COLORS.PALLETE.peach.light};
            color: ${COLORS.SYSTEM.black};
            border: ${COLORS.PALLETE.peach.light};
        `,
    },
    gray: {
        css: css`
            background-color: ${COLORS.PALLETE.gray.base};
            color: ${COLORS.SYSTEM.black};
            border: ${COLORS.PALLETE.gray.base};
        `,
    },
};
export const StyleSelect = styled.select`
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    ${({ color }) => SelectCss[color].css};
    ${SIZES.SELECT.small};
`;
