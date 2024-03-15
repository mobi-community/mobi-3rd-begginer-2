import styled from "styled-components";
import { HideNumber } from "../../utils/hide-number";
import { colors } from "../../constants/design-tokens/color";
import { useState } from "react";
import { useEffect } from "react";

/**
 * @component
 * @parameter userPerPage: number - 현재 페이지의 번호를 받아옵니다
 * @parameter userData: Array<Object> - 전체 유저의 데이터를 받아옵니다
 * @returns {JSX.Element}
 *
 * @description user 정보를 list로 보여주는 컴포넌트입니다.
 */
const UserList = ({ userPerPage, userData, curPage }) => {
    const [bgColor, setBgColor] = useState(colors.MAIN.neonBlue);
    const [textColor, setTextColor] = useState(colors.SUB.neonPurple);
    const [borderColor, setBorderColor] = useState(colors.SUB.neonPurple);

    const currentPage = Number(curPage.get("page"));

    const lastUserIndex = currentPage * userPerPage;
    const firstUserIndex = lastUserIndex - userPerPage;
    const currentUser = userData.slice(firstUserIndex, lastUserIndex);
    const colorArr = [
        colors.SUB.secondary,
        colors.SUB.neonYellow,
        colors.MAIN.darkBlue,
        colors.SUB.neonPurple,
        colors.MAIN.darkPurple,
        colors.MAIN.neonBlue,
        colors.SUB.neonOrange,
        colors.MAIN.darkRed,
        colors.SUB.neonGreen,
    ];

    let colorIndex = 0;

    useEffect(() => {
        const changeBackground = () => {
            setBgColor(colorArr[colorIndex % colorArr.length]);
            colorIndex++;
        };

        const intervalId = setInterval(changeBackground, 100);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const changeBackground = () => {
            setTextColor(colorArr[colorIndex % colorArr.length]);
            colorIndex++;
        };

        const intervalId = setInterval(changeBackground, 300);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const changeBackground = () => {
            setBorderColor(colorArr[colorIndex % colorArr.length]);
            colorIndex++;
        };

        const intervalId = setInterval(changeBackground, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            {currentUser.map((user, index) => {
                const hiddenPhoneNum = user.phone_number
                    ? HideNumber(user.phone_number)
                    : "No Phone Number";

                return (
                    <UserBox
                        key={index}
                        bgColor={bgColor}
                        textColor={textColor}
                        borderColor={borderColor}
                    >
                        <p>{user.user_id}</p>
                        <p>{user.name}</p>
                        <p>{user.birthday}</p>
                        <p>{hiddenPhoneNum}</p>
                        <p>{user.last_login}</p>
                    </UserBox>
                );
            })}
        </Container>
    );
};
export default UserList;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 970px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 790px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const UserBox = styled.div`
    padding: 4px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border-radius: 4px;
    border: 5px solid ${(props) => props.borderColor};
    @media (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);
        width: 200px;
    }
`;
