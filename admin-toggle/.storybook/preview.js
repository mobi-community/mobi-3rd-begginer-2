/** @type { import('@storybook/react').Preview } */
import { BrowserRouter } from "react-router-dom";
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;

export const decorators = [
    (Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    ),
];
