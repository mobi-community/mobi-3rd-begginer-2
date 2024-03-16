import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/layout";
import Main from "../pages/main";
import OpenPage from "../pages/openPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Main />,
            },
            {
                path: "/open",
                element: <OpenPage />,
            },
        ],
    },
]);
export default router;
