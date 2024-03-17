import React from "react";
import { SSelect } from "../../style/select.style";

const Select = ({ option, size, theme, value, onChange }) => {
    return (
        <SSelect size={size} theme={theme} value={value} onChange={onChange}>
            {option.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </SSelect>
    );
};
export default Select;
