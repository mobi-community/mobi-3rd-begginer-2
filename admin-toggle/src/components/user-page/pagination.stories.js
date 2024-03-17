import React from "react";
import Pagination from "./pagination";

// mockUserData 정의
const mockUserData = Array.from({ length: 100 }, (v, k) => ({
    id: `user${k}`,
    name: `User ${k}`,
    birthday: `1990-01-${k + 1}`,
    phone_number: `010-0000-${k.toString().padStart(4, "0")}`,
    last_login: `2020-01-${k + 1}`,
}));

export default {
    title: "Components/Pagination",
    component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    userPerPage: 10,
    userData: mockUserData,
    curPage: new URLSearchParams({ page: "1" }), // 페이지 상태 관리를 위해 URLSearchParams 사용
    setCurPage: () => {}, // 페이지 변경 로직은 실제 컴포넌트 사용 시 구현되어야 함
};
