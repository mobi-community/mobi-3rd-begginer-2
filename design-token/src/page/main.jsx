import styled from "styled-components";
import Select from "../components/common/select";
import Input from "../components/common/input";
import { colors } from "../constants/design-tokens/color";
import StyledButton from "../components/common/button";
import CheckBox from "../components/common/check-box";
import { useState } from "react";
import MultiSelectChips from "../components/common/muti-select-chips";
import TailwindInput from "../components/common/tailwindCss/tailwind-input";
import { HeadlessCheckBox } from "../components/common/headless/headless-checkbox";
import { HeadlessSelect } from "../components/common/headless/headless-select";
import { TailwindButton } from "../components/common/tailwindCss/tailwind-button";
import Button from "@mui/material/Button";
import MUISelect from "../components/common/MUI/MUI-select";
import MUIButton from "../components/common/MUI/MUI-button";
import MUITextField from "../components/common/MUI/MUI-TextField";
import useModal from "../components/hook/custom-modal";
import HeadlessModal from "../components/common/headless/headless-modal";

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

    const { isOpen, openModal, closeModal } = useModal();

    return (
        <Wrapper>
            <CustomBox>
                <p>디자인 토큰과 테마를 사용한 공용 컴포넌트</p>
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
                <StyledButton
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
            </CustomBox>
            <CustomBox>
                <p>tailwindCss를 사용한 공용 컴포넌트</p>
                <TailwindButton
                    variant="register"
                    shape="primary"
                    size="md"
                    weight="semibold"
                    onClick={() => alert("확인 클릭")}
                >
                    확인
                </TailwindButton>
                <TailwindButton
                    variant="cancel"
                    shape="square"
                    size="sm"
                    weight="bold"
                    onClick={() => alert("취소 클릭")}
                >
                    취소
                </TailwindButton>
                <TailwindInput
                    variant={"error"}
                    size={"lg"}
                    placeholder="오류"
                />
            </CustomBox>

            <CustomBox>
                <p>headless component를 사용한 컴포넌트</p>
                <StyledButton
                    text={"open modal"}
                    theme={"neonOrangeYellow"}
                    size={"small"}
                    onClick={openModal}
                />
                <HeadlessModal isOpen={isOpen} closeModal={closeModal}>
                    <h2>title</h2>
                    <p>open modal</p>
                </HeadlessModal>
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
            </CustomBox>
            <CustomBox>
                <p>NUI를 사용한 컴포넌트</p>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ backgroundColor: "violet" }}
                >
                    MUI
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    sx={{ backgroundColor: "red" }}
                >
                    MUI
                </Button>
                <MUISelect />
                <MUIButton />
                <MUITextField />
            </CustomBox>
        </Wrapper>
    );
};
export default Main;

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${colors.background.default};
`;

const CustomBox = styled.div`
    width: 500px;
    border: 1px solid ${colors.border.neonOrange};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
`;
