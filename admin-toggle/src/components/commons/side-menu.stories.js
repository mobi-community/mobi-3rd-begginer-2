import React from "react";
import { MemoryRouter } from "react-router-dom";
import SideMenu from "./side-menu";

export default {
    title: "Components/SideMenu",
    component: SideMenu,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ], // react-router-dom을 사용하는 경우 필요
};

const Template = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
