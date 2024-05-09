import { createBrowserRouter } from "react-router-dom";
import MainRoots from "../pages/MainRoots/MainRoots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoots></MainRoots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);