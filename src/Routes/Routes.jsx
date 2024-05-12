import { createBrowserRouter } from "react-router-dom";
import MainRoots from "../pages/MainRoots/MainRoots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import AllRooms from "../pages/AllRooms";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import RoomsDetails from "../pages/RoomsDetails";

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
        path: '/allRooms',
        element: <PrivateRoutes>
          <AllRooms></AllRooms>
        </PrivateRoutes>
      },
      {
        path: '/roomDetails/:id',
        element: <RoomsDetails></RoomsDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_LINK}/rooms/${params.id}`)
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