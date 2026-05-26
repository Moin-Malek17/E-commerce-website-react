import { useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from '../assets/logo.png.png';
import { useDataContext } from "../context/dataContex";
import { IoCart, IoMenu, IoClose } from "react-icons/io5";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import CategoryNav from "./CategoryNav";

const Navbar = () => {
    const { color, handlerTheme, theme } = useDataContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="navbar-container sticky top-0 z-50 glass">
            <nav className={`navbar w-full px-4 py-4`} >
                <div className="nav-container w-full max-w-7xl mx-auto flex items-center justify-between">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <NavLink to='/' className={`nav-logo flex items-center`}>
                            <img src={Logo} alt="Logo" className={`h-8 ${theme === 'dark' ? 'invert brightness-0 filter' : ''}`} />
                        </NavLink>
                    </div>

                    {/* Desktop Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-greenish font-semibold" : "text-primaryText font-medium"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className={({ isActive }) => isActive ? "text-greenish font-semibold" : "text-primaryText font-medium"}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-greenish font-semibold" : "text-primaryText font-medium"}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-greenish font-semibold" : "text-primaryText font-medium"}>Contact</NavLink>
                        </li>
                    </ul>

                    {/* Desktop Icons & Settings */}
                    <div className="hidden md:flex items-center gap-6">
                        <div onClick={() => handlerTheme()} className="cursor-pointer text-xl hover:text-greenish transition-colors">
                            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                        </div>
                        <NavLink to="/cart" className="flex items-center gap-1 hover:text-greenish transition-colors font-medium">
                            <IoCart className="text-2xl" /> Cart
                        </NavLink>
                        {/* <div className="cursor-pointer hover:text-greenish font-medium">Login</div> */}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <div onClick={() => handlerTheme()} className="cursor-pointer text-xl">
                            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
                        </div>
                        <NavLink to="/cart" className="flex items-center gap-1 hover:text-greenish">
                            <IoCart className="text-2xl" />
                        </NavLink>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-3xl text-primaryText focus:outline-none">
                            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-cardBg border-b border-cardBorder shadow-lg py-4 px-6 flex flex-col gap-4 animate-fadeIn">
                        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium border-b border-cardBorder pb-2">Home</NavLink>
                        <NavLink to="/product" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium border-b border-cardBorder pb-2">Product</NavLink>
                        <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium border-b border-cardBorder pb-2">About</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium  border-cardBorder ">Contact</NavLink>
                        {/* <div className="text-lg font-medium cursor-pointer text-greenish pt-2" onClick={() => setIsMobileMenuOpen(false)}>Login</div> */}
                    </div>
                )}
            </nav>
            
            {/* Category Sub-Nav */}
            <CategoryNav />
        </div>
    );
};

export default Navbar;