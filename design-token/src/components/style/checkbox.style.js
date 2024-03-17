import styled, { css } from "styled-components";
import { colors } from "../../constants/design-tokens/color";

const ColorCss = {
    darkBlueNeonYellow: css`
        background-color: ${colors.MAIN.darkBlue};
        border: 1px solid ${colors.SUB.neonYellow};
    `,
    darkRedNeonGreen: css`
        background-color: ${colors.MAIN.darkRed};
        border: 1px solid ${colors.SUB.neonGreen};
    `
}

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const HiddenBox = styled.input`
    opacity: 0;
    position: absolute;
    transform: translate()(-50%, -50%);
    margin: 0;
    cursor: pointer;
`;

const SCheckBox = styled.div`
    display: inline-block;
    position: relative;
    width: 10px;
    height: 10px;
    ${({theme}) => ColorCss[theme]}
    border-radius: 4px;
    transition: background-color 0.2s;
`;

const CheckMark = styled.span`
    display: flex;
    align-self: center;
    width: 10px;
    height: 5px;
    border-left: 2px solid ${colors.common.success};
    border-bottom: 2px solid ${colors.common.success};
    transform: translate(2px, -5px) rotate(-45deg);
`;
const CheckBoxLabel = styled.label`
    padding-left: 8px;
    color: ${({ labelColor }) =>
        colors.text[labelColor] || colors.text.default};
`;

export const CheckBoxStyle = {
    Container,
    HiddenBox,
    SCheckBox,
    CheckMark,
    CheckBoxLabel
}