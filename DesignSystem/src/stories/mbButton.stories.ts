import { Meta, StoryObj } from "@storybook/react"
import { MBButton } from "."

const meta = {
  title: "MBComponent/MBButton",
  component: MBButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MBButton>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    theme: "main",
    text: "mainType",
  },
}
export const MainRound: Story = {
  args: {
    theme: "main",
    text: "mainType",
    radius: "round",
  },
}

export const MainOppsite: Story = {
  args: {
    theme: "mainOppsite",
    text: "oppsiteType",
  },
}
export const MainOppsiteRound: Story = {
  args: {
    theme: "mainOppsite",
    text: "oppsiteType",
    radius: "round",
  },
}
