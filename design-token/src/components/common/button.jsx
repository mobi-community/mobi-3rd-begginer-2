// Button 컴포넌트
import { css, styled } from "styled-components";
import { colors } from "./../../libs/design-token/color";
import { border } from "../../libs/design-token/design";
const Button = ({ colorMode, borderRadiusStyle, shape, props }) => {
    return (
        <CustomBtn
            colorMode={colorMode}
            borderRadiusStyle={borderRadiusStyle}
            shape={shape}
            {...props}
        ></CustomBtn>
    );
};
export default Button;

const ShapeCss = {
    baseType: css`
        width: 20rem;
        height: 10rem;
    `,
    shaftType: css`
        width: 10rem;
        height: 30rem;
        border: 5px solid black;
    `,
    circleType: css`
        width: 20rem;
        height: 20rem;
        border: 5px solid black;
    `,
};

const CustomBtn = styled.button`
    width: fit-content;
    height: fit-content;
    min-height: 5rem;
    min-width: 5rem;
    background-color: ${({ colorMode }) => colors.rainbow[colorMode].base};
    border-radius: ${({ borderRadiusStyle }) =>
        border.radius[borderRadiusStyle]};
    ${({ shape }) => ShapeCss[shape]}
    &:hover {
        background-color: red;
    }
`;
