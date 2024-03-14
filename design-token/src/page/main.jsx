import styled from "styled-components";
import Select from "../components/common/select";
import Input from "../components/common/input";
import { colors } from "../constants/design-tokens/color";
import Button from "../components/common/button";
import CheckBox from "../components/common/check-box";
import { useState } from "react";

const Main = () => {
    const [isChecked, setIsChecked] = useState({
        라벨: false,
        라벨2: false,
    });

    const handleCheckedChange = (label) => (e) => {
        setIsChecked({ ...isChecked, [label]: e.target.checked });
    };

    const dropDownOption = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
    ];

    return (
        <Wrapper>
            <Select
                option={dropDownOption}
                size={"medium"}
                theme={"neonGreenDarkRed"}
            />
            <Input
                placeholder={"플레이스 홀더"}
                size={"small"}
                theme={"neonPinkDark"}
            />
            <Button
                text={"버튼입니다"}
                clickText={"클릭함!!!!"}
                theme={"neonGreenDark"}
                size={"medium"}
            />
            <CheckBox
                label={"라벨"}
                labelColor={"secondary"}
                size={"small"}
                theme={"darkBlueNeonYellow"}
                checked={isChecked.라벨}
                onChange={handleCheckedChange("라벨")}
            />
            <CheckBox
                label={"라벨2"}
                labelColor={"default"}
                size={"large"}
                theme={"darkRedNeonGreen"}
                checked={isChecked.라벨2}
                onChange={handleCheckedChange("라벨2")}
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
