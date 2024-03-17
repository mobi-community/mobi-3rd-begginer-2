import { css } from "@emotion/react";
import { COLORS } from "../../designToken/color";
import styled from "styled-components";
import { SIZES } from "../../designToken/size";
import { BORDERRADIUS } from "../../designToken/border";

const CheckBoxColorCss = {
    mainPurple: {
        css: css`
            background-color: ${COLORS.MAIN.base};
        `,
    },
    teal: {
        css: css`
            background-color: ${COLORS.PALLETE.teal.base};
        `,
    },
    green: {
        css: css`
            background-color: ${COLORS.PALLETE.green.base};
        `,
    },
    gray: {
        css: css`
            background-color: ${COLORS.PALLETE.gray.base};
        `,
    },
    peach: {
        css: css`
            background-color: ${COLORS.PALLETE.peach.weight};
        `,
    },
    lemon: {
        css: css`
            background-color: ${COLORS.PALLETE.lemon};
        `,
    },
};

const CheckBoxWidthCss = {
    mini: {
        css: css`
            width: ${SIZES.BUTTON.mini.width};
            height: ${SIZES.BUTTON.mini.height};
        `,
    },
    small: {
        css: css`
            width: ${SIZES.BUTTON.small.width};
            height: ${SIZES.BUTTON.small.height};
        `,
    },
    medium: {
        css: css`
            width: ${SIZES.BUTTON.medium.width};
            height: ${SIZES.BUTTON.medium.height};
        `,
    },
    large: {
        css: css`
            width: ${SIZES.BUTTON.large.width};
            height: ${SIZES.BUTTON.large.height};
        `,
    },
};

const CheckBoxBorder = {
    small: {
        css: css`
            border-radius: ${BORDERRADIUS.sm};
        `,
    },
    medium: {
        css: css`
            border-radius: ${BORDERRADIUS.md};
        `,
    },
    large: {
        css: css`
            border-radius: ${BORDERRADIUS.lg};
        `,
    },
};

export const StyleCheckbox = styled.input`
    /* type:checkbox; */
    ${({ color }) => CheckBoxColorCss[color].css}
    ${({ size }) => CheckBoxWidthCss[size].css}
    ${({ radius }) => CheckBoxBorder[radius].css}
`;

export const StyleCheckboxLabel = styled.label``;
