import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CreateUserData } from "../utils/user-data";
import { styled } from "styled-components";
import Pagination from "../components/user-page/pagination";
import Button from "../components/commons/button";
import { colors } from "../constants/design-tokens/color";
import Select from "../components/commons/select";
/**
 * @component
 * @returns {JSX.Element}
 *
 * @description 유저 목록을 보여주는 컴포넌트입니다.
 */
const UserListPage = () => {
    const [userData, setUserData] = useState([]);
    const [sortType, setSortType] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(
        colors.MAIN.darkBlue
    );

    // 상태를 가지고있다.
    const [searchParams, setSearchParams] = useSearchParams();

    // sort button을 보여주기위한 배열
    const sortBtnArr = [
        { name: "이름순", key: "name", theme: "neonPinkDark" },
        { name: "생년월일순", key: "birthday", theme: "neonGreenDark" },
        { name: "전화번호순", key: "phone_number", theme: "neonBlueDarkBlue" },
        {
            name: "마지막 로그인순",
            key: "last_login",
            theme: "neonOrangeYellow",
        },
    ];

    const perpageOption = [
        { value: 20, label: "20" },
        { value: 50, label: "50" },
    ];

    const sortOption = [
        { value: "false", label: "오름차순" },
        { value: "true", label: "내림차순" },
    ];

    useEffect(() => {
        // 마운트 시 랜덤한 user data 200개를 새로 만듦
        setUserData(CreateUserData({ userDataNum: 360 }));

        searchParams.set("page", 1);
        setSearchParams(searchParams);
    }, []);

    useEffect(() => {
        // perPage의 초기값 설정
        const perPage = Number(searchParams.get("per_page") || 20); // get으로 per_page키를 받아서 value 받아오기

        if (perPage !== Number(searchParams.get("per_page"))) {
            searchParams.set("per_page", perPage); //set
            setSearchParams(searchParams, { replace: true }); // replace: 주소갱신 true
        }

        // key값 name, birthday...등을 받아와서 정렬해주는 함수
        const sortKeyChange = (key) => {
            const order = searchParams.get("type") === "true";
            const sortKey = [...userData].sort((a, b) => {
                const aValue = String(a[key]);
                const bValue = String(b[key]);
                return order
                    ? bValue?.localeCompare(aValue)
                    : aValue?.localeCompare(bValue);
            });
            // 정렬된 값 userData에 새로 저장
            setUserData(sortKey);
        };

        // 주소의 sort를 가져와서 저장
        const sortKey = searchParams.get("sort");
        // 만약 sortKey, userData의 길이가 0보다 클 때
        if (sortKey && userData.length > 0) {
            // 함수 정렬해주는 함수에 sortKey 전달
            sortKeyChange(sortKey);
        }

        const typeParam = searchParams.get("type");
        setSortType(typeParam === "true");
        // 주소가 변경될 때마다 마운트
    }, [searchParams]);

    // event의 target.value값을 params의 key, value로 전달
    const handleChange = (key, value) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
    };

    // click시 받은 key를 params에 key, value로 전달
    // page 변경 시 주소에 보여주도록 상태로 전달
    const onClickSortKey = (key) => {
        searchParams.set("sort", key);
        setSearchParams(searchParams);
    };

    useEffect(() => {
        const colorArr = [
            colors.SUB.neonGreen,
            colors.MAIN.darkRed,
            colors.SUB.neonOrange,
            colors.MAIN.neonBlue,
            colors.MAIN.darkPurple,
            colors.SUB.neonPurple,
            colors.MAIN.darkBlue,
            colors.SUB.neonYellow,
            colors.SUB.secondary,
        ];
        let colorIndex = 0;

        const changeBackground = () => {
            setBackgroundColor(colorArr[colorIndex % colorArr.length]);
            colorIndex++;
        };

        const intervalId = setInterval(changeBackground, 10);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Wrapper style={{ backgroundColor: backgroundColor }}>
            <SelectPerPageBox>
                <Select
                    value={searchParams.get("per_page")}
                    onChange={(e) => handleChange("per_page", e.target.value)}
                    theme={"neonOrangeDarkPurple"}
                    option={perpageOption}
                />
                {/* 중복되는 button을 배열을 받아와 map으로 보여줌 */}
                <Select
                    onChange={(e) => handleChange("type", e.target.value)}
                    value={sortType ? "true" : "false"}
                    option={sortOption}
                    theme={"neonGreenDarkRed"}
                />

                {sortBtnArr.map((button, index) => (
                    <Button
                        key={index}
                        theme={button.theme}
                        onClick={() => onClickSortKey(button.key)}
                        disabled={searchParams.get("sort") === button.key}
                        $isActive={searchParams.get("sort") === button.key}
                    >
                        {button.name}
                    </Button>
                ))}
            </SelectPerPageBox>
            <Wrapper>
                <Pagination
                    curPage={searchParams}
                    setCurPage={setSearchParams}
                    userPerPage={searchParams.get("per_page")}
                    userData={userData}
                />
            </Wrapper>
        </Wrapper>
    );
};
export default UserListPage;

const SelectPerPageBox = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
