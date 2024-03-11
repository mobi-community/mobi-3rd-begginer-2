import sizes from "../../constants/design-tokens/size";

const Select = ({
    option,
    size = "medium",
    color = "default",
    fontSize = "16px",
    backgroundColor = "default",
}) => {
    const sizeStyle = sizes.select[size];
    return (
        <select style={{ ...sizeStyle, color, fontSize, backgroundColor }}>
            {option.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
export default Select;
