import styled from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";

const Input = ({ placeholder, size, color, fontSize }) => {
    return (
        <SInput
            type="text"
            placeholder={placeholder}
            size={size}
            color={color}
            fontSize={fontSize}
        />
    );
};
export default Input;

const SInput = styled.input`
    padding: ${({ size }) => sizes.input[size]?.padding};
    font-size: ${({ fontSize }) => fontSize || "16px"};
    color: ${({ color }) => colors.text[color] || colors.text.default};
    border: ${({ size }) => sizes.input[size]?.border};
`;
