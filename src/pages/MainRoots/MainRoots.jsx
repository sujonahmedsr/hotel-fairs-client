import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const MainRoots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoots;