import styled from "styled-components";
import UserPage from "./userpage";
import { COLORS } from "../designToken/color";
import Container from "@mui/material/Container";

const Main = () => {
    return (
        <MainWrapper>
            <Container maxWidth="sm">
                <UserPage />
            </Container>

            {/* <Button color="mainPurple" size="large" text="하영천재" />
            <Select color="mainPurple" option={options} /> */}
        </MainWrapper>
    );
};
export default Main;
const MainWrapper = styled.div`
    /* display: flex;
    width: 100%;
    background-color: ${COLORS.PALLETE.teal.light};
    justify-content: center;
    align-items: center; */
`;
