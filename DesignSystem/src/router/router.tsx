import { createBrowserRouter } from "react-router-dom"
import Main from "../page/main"
import Components from "../page/components"

const router = createBrowserRouter([
  {
    path: "",
    element: <Main />,
  },
  {
    path: "/components",
    element: <Components />,
    children: [{ path: "textcard" }],
  },
])

export default router
