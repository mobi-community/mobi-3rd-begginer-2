import { SSelect } from "../style/select.style";

const Select = ({ option, size, theme }) => {
    return (
        <SSelect
            size={size}
            theme={theme}
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

