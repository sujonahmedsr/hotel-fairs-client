import { createBrowserRouter } from "react-router-dom";
import MainRoots from "../pages/MainRoots/MainRoots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoots></MainRoots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {

        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
        }
      ]
    },
  ]);