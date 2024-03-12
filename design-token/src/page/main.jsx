import styled from "styled-components";
import Title from "../components/main/title";
import Select from "../components/common/select";
import Input from "../components/common/input";
import { colors } from "../constants/design-tokens/color";
import Button from "../components/common/button";
import CheckBox from "../components/common/check-box";
import { useState } from "react";

const Main = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckedChange = (e) => {
        setIsChecked(e.target.checked);
    };
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
                placeholder={"플레이스 홀더"}
                size={"small"}
                theme={"neonPinkDark"}
            />
            <Button
                text={"버튼입니다"}
                theme={"neonGreenDark"}
                size={"medium"}
            />
            <CheckBox
                label={"라벨"}
                labelColor={"neonGreen"}
                size={"medium"}
                color={"darkBlue"}
                borderColor={"secondary"}
                checked={isChecked}
                onChange={handleCheckedChange}
            />
            <CheckBox
                label={"라벨2"}
                labelColor={"neonGreen"}
                size={"medium"}
                color={"darkBlue"}
                borderColor={"secondary"}
                checked={isChecked}
                onChange={handleCheckedChange}
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
