import styled from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";

const Select = ({ option, size, color, fontSize, backgroundColor }) => {
    return (
        <SSelect
            size={size}
            color={color}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
        >
            {option.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SSelect>
    );
};
export default Select;

const SSelect = styled.select`
    padding: ${({ size }) => sizes.select[size]};
    color: ${({ color }) => colors.text[color]};
    font-size: ${({ fontSize }) => fontSize};
    background-color: ${({ backgroundColor }) =>
        colors.background[backgroundColor] || colors.background.default};
    border: 1px solid ${colors.border.default};

    &:focus {
        outline: none;
        border-color: ${colors.border.primary};
    }
`;
