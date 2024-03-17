import styled from "styled-components";
import { StyleCheckbox } from "../styleTheme/checkBox.style";

const CheckBox = () => {
    return (
        <>
            <Span className="checkbox">
                <input type="checkbox" id="checkbox" />
                <Label for="checkbox">클릭해보세요!</Label>
            </Span>
        </>
    );
};
export default CheckBox;

const Span = styled.span``;
const Label = styled.label``;
