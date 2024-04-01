import { createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"
import { PageError } from "./pages/error"


export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <PageError />
      }
    ]
  }
])
