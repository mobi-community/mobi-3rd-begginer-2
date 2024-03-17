import UserList from "./user-list";

const mockUserData = Array.from({ length: 20 }, (v, k) => ({
    user_id: `user${k}`,
    name: `User ${k}`,
    birthday: `1990-01-${k + 1}`,
    phone_number: `010-0000-${k.toString().padStart(4, "0")}`,
    last_login: `2020-01-${k + 1}`,
}));

export default {
    title: "Components/UserList",
    component: UserList,
    args: {
        userPerPage: 10,
        userData: mockUserData,
        curPage: new URLSearchParams({ page: "1" }),
    },
};

const Template = (args) => <UserList {...args} />;

export const Default = Template.bind({});
