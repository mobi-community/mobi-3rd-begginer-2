import { RouterProvider } from "react-router-dom";

import router from "./libs/router/router";
import GlobalStyles from "./libs/styledComponents/GlobalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
