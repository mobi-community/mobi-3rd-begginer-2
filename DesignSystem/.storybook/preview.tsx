import type { Preview } from "@storybook/react"
import { GlobalStyles } from "../src/styled-components/globalStyle"
import React from "react"
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyles />
          <Story />
        </>
      )
    },
  ],
}

export default preview
