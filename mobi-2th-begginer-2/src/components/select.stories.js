import Select from "./common/select";
//title: 컴포넌트이름
//component: 컴포넌트
//argTypes: 컴포넌트에 필요한 전달인자의 종류와 타입 , text이라는 전달인자에 text타입
export default {
    title: "Select",
    component: Select,
    argTypes: {
        color: { control: "text" }, // 컬러를 선택하도록 수정
        option: { control: "array" }, // 배열을 입력받도록 수정
        value: { control: "text" }, // 값 입력을 받도록 수정
        onChange: { action: "changed" }, // onChange 이벤트를 action으로 설정
    },
};
//템플릿 생성. 템플릿을 사용하여 스토리북에 넣어줄 스토리
const Template = (args) => <Select {...args} />;
export const SelectPurple = Template.bind({});
SelectPurple.args = {
    color: "mainPurple",
    option: [
        { id: 1, value: "value1", label: "Option 1" },
        { id: 2, value: "value2", label: "Option 2" },
        { id: 3, value: "value3", label: "Option 3" },
    ],
    value: "value1", // 초기값 설정
    onChange: () => {}, // onChange 함수 설정
};
