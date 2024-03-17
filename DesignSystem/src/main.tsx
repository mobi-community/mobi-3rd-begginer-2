import React from "react"
import ReactDOM from "react-dom/client"
import { GlobalStyles } from "./styled-components/globalStyle.tsx"
import { RouterProvider } from "react-router-dom"
import router from "./router/router.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
)
