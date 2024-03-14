import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../../stories/Mainpage";
import HistogramPage from "../../stories/HistogramPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainpage />,
    },
    {
        path: "/histogram",
        element: <HistogramPage />,
    },
]);

export default router;
