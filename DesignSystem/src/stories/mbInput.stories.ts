import type { Meta, StoryObj } from "@storybook/react"
import { MBInput } from "."

const meta = {
  title: "MBComponent/MBInput",
  component: MBInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MBInput>

type Story = StoryObj<typeof meta>

export default meta

export const Search: Story = {
  args: {
    purpose: "search",
    hasButton: false,
    hasIcon: false,
    placeHolder: "placeHolder",
    buttonName: "등록",
  },
}

export const ResgisterSmall: Story = {
  args: {
    purpose: "resgisterSmall",
    hasButton: false,
    hasIcon: false,
    placeHolder: "placeHolder",
    buttonName: "등록",
  },
}
export const ResgisterNormal: Story = {
  args: {
    purpose: "resgisterNormal",
    hasButton: false,
    hasIcon: false,
    placeHolder: "placeHolder",
    buttonName: "등록",
  },
}
export const ResgisterLarge: Story = {
  args: {
    purpose: "resgisterLarge",
    hasButton: false,
    hasIcon: false,
    placeHolder: "placeHolder",
    buttonName: "등록",
  },
}
