import styled from "styled-components";
import Select from "../components/common/select";
import Input from "../components/common/input";
import { colors } from "../constants/design-tokens/color";
import Button from "../components/common/button";
import CheckBox from "../components/common/check-box";
import { useState } from "react";
import MultiSelectChips from "../components/common/muti-select-chips";
import TailwindButton from "../components/common/tailwindCss/tailwind-button";
import TailwindInput from "../components/common/tailwindCss/tailwind-input";
import { HeadlessCheckBox } from "../components/common/headless/headless-checkbox";
import { HeadlessSelect } from "../components/common/headless/headless-select";

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

    const chipsTextArr = [
        "silver",
        "blue",
        "fuchsia",
        "purple",
        "black",
        "yellow",
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

            <MultiSelectChips chipsText={chipsTextArr} />

            <TailwindButton
                text="확인"
                className="bg-green-500 hover:bg-green-700"
                onClick={() => alert("확인 클릭")}
            />
            <TailwindButton
                text="취소"
                className="bg-neonBlue hover:bg-neonOrange"
                onClick={() => alert("취소 클릭")}
            />
            <TailwindInput
                type={"text"}
                placeholder={"여기에 입력하세요"}
                className="bg-neonBlue border rounded border-neonOrange focus:outline-none focus:border-neonBlue"
            />
            <HeadlessCheckBox deflaultChecked={true}>
                {({ checked, toggle }) => (
                    <label>
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={toggle}
                        />
                        {checked ? "Checked" : "Unchecked"}
                    </label>
                )}
            </HeadlessCheckBox>
            <HeadlessSelect defaultSelected={"1"} options={dropDownOption}>
                {({ options, select }) => (
                    <select>
                        {options?.map((option, index) => (
                            <option
                                key={index}
                                onClick={() => select(option.value)}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            </HeadlessSelect>
        </Wrapper>
    );
};
export default Main;

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${colors.background.default};
`;
