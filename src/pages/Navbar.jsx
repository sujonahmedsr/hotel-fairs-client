import { Link, NavLink } from "react-router-dom";
import useAuth from "../AuthProvider/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const hangleLogOut = () => {
        logOut()
        // toast('log out successfully')
    }
    const styleNav = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#4D869C" : "",
        };
    }
    const navLinks = <>
        <NavLink style={styleNav} to={'/'}>
            <li className="px-5 py-2">Home</li>
        </NavLink>
        <NavLink to={'/about'} style={styleNav}>
            <li className="px-5 py-2">About Us</li>
        </NavLink>
        <NavLink to={'contact'} style={styleNav}>
            <li className="px-5 py-2">Contact Us</li>
        </NavLink>
    </>
    return (
        <div className="bg-back border-b-2 fixed z-10 left-0 right-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl text-primay font-black cursor-pointer hover:text-cyan-600">Hotel.Fair</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={hangleLogOut} className="px-8 py-3 bg-primay hover:bg-cyan-600 text-white font-medium rounded">Log Out</button>
                        :
                        <Link to={'/login'} className="px-8 py-3 bg-primay hover:bg-cyan-600 text-white font-medium rounded">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;