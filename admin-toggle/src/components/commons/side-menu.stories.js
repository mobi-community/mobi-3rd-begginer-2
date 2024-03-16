import React from "react";
import SideMenu from "./side-menu";

export default {
    title: "Components/SideMenu",
    component: SideMenu,
};

const Template = (args) => <SideMenu {...args} />;

export const Default = Template.bind({});
