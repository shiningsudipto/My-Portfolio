import { Link } from "react-scroll";
import resume from '../../../public/Resume of Sudipta Das.pdf'


const Navbar = () => {
    const navLinks = <>
        <Link
            activeClass="active"
            className="navLinks"
            spy={true}
            smooth={true}
            to="home">
            Home
        </Link>
        <Link
            activeClass="active"
            className="navLinks"
            spy={true}
            smooth={true}
            offset={-30}
            to="services">Services</Link>
        <Link
            activeClass="active"
            className="navLinks"
            spy={true}
            smooth={true}
            offset={-30}
            to="portfolio">Portfolio</Link>
        <Link
            activeClass="active"
            className="navLinks"
            spy={true}
            smooth={true}
            offset={-30}
            to="about">About</Link>
        <Link
            activeClass="active"
            className="navLinks"
            spy={true}
            smooth={true}
            offset={-80}
            to="contact">Contact</Link>
    </>
    return (
        <div>
            <div className="navbar bg-background1 text-white bg-opacity-50 backdrop-blur backdrop-blur-md fixed z-10 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-4">
                        <img
                            className="border border-1 border-myRed rounded-full" src="" alt="" />
                        <h2 className="lg:text-4xl sm:text-3xl font-bold">Sudipta <span className="">Das</span></h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:h-[65px] items-center space-x-4 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="myBtn md:block hidden border-2 rounded-lg border-myPurple" href={resume} download="resume of Sudipta Das">Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;