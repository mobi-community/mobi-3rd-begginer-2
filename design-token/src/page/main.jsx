import styled from "styled-components";
import { COLORS } from "../constants/design-tokens/color";
import Title from "../components/main/title";
import sizes from "../constants/design-tokens/size";
import Select from "../components/common/select";
import { fontSize } from "../constants/design-tokens/font-size";

const Main = () => {
    const dropDownOption = [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
    ];
    return (
        <Wrapper>
            <Title title={"title"} textColor={COLORS.DANGER} />
            <Select
                option={dropDownOption}
                size="medium"
                color={COLORS.NEON_GREEN}
                fontSize={fontSize.small}
                backgroundColor={COLORS.NEON_ORANGE}
            />
        </Wrapper>
    );
};
export default Main;

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${COLORS.GRAY[400]};
`;
