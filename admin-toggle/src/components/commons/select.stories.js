import Select from "./select";

export default {
    title: "Components/Select",
    component: Select,
    argTypes: {
        size: {
            description: "select의 크기를 설정해줍니다.",
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        theme: {
            description: "select의 색상 테마를 설정해줍니다.",
            control: { type: "radio" },
            options: ["neonGreenDarkRed", "neonOrangeDarkPurple"],
        },
        option: {
            description:
                "select에서 사용자가 선택할 수 있는 옵션들을 설정합니다.",
            control: { type: "array" },
            defaultValue: [],
        },
    },
    tags: ["autodocs"],
};

const Template = (args) => <Select {...args} />;

export const MultipulSelect = Template.bind({});
MultipulSelect.args = {
    size: "small",
    theme: "neonGreenDarkRed",
    option: [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
    ],
};
