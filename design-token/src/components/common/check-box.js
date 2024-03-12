import styled from "styled-components";
import sizes from "../../constants/design-tokens/size";
import { colors } from "../../constants/design-tokens/color";

const CheckBox = ({
    label,
    size = "medium",
    color = "default",
    onChange,
    checked,
    labelColor,
    borderColor,
}) => {
    return (
        <Container>
            <HiddenBox type="checkbox" checked={checked} onChange={onChange} />
            <SCheckBox size={size} color={color} borderColor={borderColor}>
                {checked && <CheckMark />}
            </SCheckBox>
            {label && (
                <CheckBoxLabel labelColor={labelColor}>{label}</CheckBoxLabel>
            )}
        </Container>
    );
};
export default CheckBox;

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const HiddenBox = styled.input`
    opacity: 0;
    position: absolute;
    margin-left: 4px;
`;

const SCheckBox = styled.div`
    display: inline-block;
    width: ${({ size }) => sizes.checkbox[size]?.width};
    height: ${({ size }) => sizes.checkbox[size]?.height};
    background-color: ${({ checked, color }) =>
        checked ? colors.background[color] : colors.background.default};
    border: 1px solid
        ${({ borderColor }) =>
            colors.border[borderColor] || colors.border.default};
    border-radius: ${({ size }) => sizes.checkbox[size].borderRadius};
    transition: background-color 0.2s;
`;

const CheckMark = styled.span`
    display: flex;
    align-self: center;
    padding-left: 3px;
    width: 10px;
    height: 5px;
    border-left: 2px solid ${colors.success};
    border-bottom: 2px solid ${colors.success};
    transform: translate(2px, 3px) rotate(-45deg);
`;
const CheckBoxLabel = styled.label`
    padding-left: 8px;
    color: ${({ labelColor }) =>
        colors.text[labelColor] || colors.text.default};
`;
