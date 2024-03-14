import { SSelect } from "../../style/select.style";

export const Select = ({ option, size, theme, value, onChange }) => {
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
