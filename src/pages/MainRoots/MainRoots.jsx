import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainRoots = () => {
    return (
        <div className="font-oleoScript">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainRoots;