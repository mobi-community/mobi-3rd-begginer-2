import styled from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";

const Button = ({ color, size, text, backgroundColor, borderColor }) => {
    return (
        <SButton
            color={color}
            size={size}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
        >
            {text}
        </SButton>
    );
};

export default Button;

const SButton = styled.button`
    width: ${({ size }) => sizes.button[size]?.width};
    height: ${({ size }) => sizes.button[size?.height]};
    font-size: ${({ fontSize }) => fontSize || "16px"};
    color: ${({ color }) => colors.text[color] || colors.text.default};
    background-color: ${({ backgroundColor }) =>
        colors.background[backgroundColor] || colors.background.default};
    border-radius: ${({ size }) => sizes.button[size]};

    cursor: pointer;

    &:active {
        background-color: ${({ backgroundColor }) =>
            colors.background[backgroundColor]
                ? `${colors.background[backgroundColor]}cc`
                : `${colors.background.default}cc`};
        transform: scale(0.98);
    }
`;
