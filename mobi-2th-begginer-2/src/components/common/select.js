import { StyleSelect } from "../styleTheme/selectBox.style";

const Select = ({ color, option }) => {
    return (
        <StyleSelect color={color}>
            {option?.map((option, index) => (
                <option key={index}>{option}</option>
            ))}
        </StyleSelect>
    );
};
export default Select;
