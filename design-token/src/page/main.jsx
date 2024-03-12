import styled from "styled-components";
import Title from "../components/main/title";
import Select from "../components/common/select";
import Input from "../components/common/input";
import { colors } from "../constants/design-tokens/color";
import Button from "../components/common/button";

const Main = () => {
    const dropDownOption = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
    ];
    return (
        <Wrapper>
            <Title title={"title"} textColor={colors.text.neonOrange} />
            <Select
                option={dropDownOption}
                size={"medium"}
                color={"neonPurple"}
                fontSize={"medium"}
                backgroundColor={"darkBlue"}
            />
            <Input
                placeholder={"음?"}
                size={"small"}
                color={"neonOrange"}
                fontSize={"large"}
            />
            <Button
                text={"버튼입니다"}
                color={"neonYellow"}
                size={"small"}
                fontSize="large"
                backgroundColor={"darkRed"}
                borderColor={"neonGreen"}
                border={"primary"}
            />
        </Wrapper>
    );
};
export default Main;

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${colors.background.default};
`;
