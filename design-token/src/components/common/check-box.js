import { CheckBoxStyle } from "../style/checkbox.style";

const CheckBox = ({ label, onChange, checked, labelColor, theme }) => {
    return (
        <CheckBoxStyle.Container>
            <CheckBoxStyle.SCheckBox theme={theme}>
                <CheckBoxStyle.HiddenBox
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                {checked && <CheckBoxStyle.CheckMark />}
            </CheckBoxStyle.SCheckBox>
            {label && (
                <CheckBoxStyle.CheckBoxLabel labelColor={labelColor}>
                    {label}
                </CheckBoxStyle.CheckBoxLabel>
            )}
        </CheckBoxStyle.Container>
    );
};
export default CheckBox;
