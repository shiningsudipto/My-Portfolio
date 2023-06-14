

const Navbar = () => {
    const navLinks = <>
        <li className="border border-1 border-myRed px-3 py-2 font-semibold hover:bg-myRed hover:rounded-sm">Home</li>
        <li className="border border-1 border-myRed px-3 py-2 font-semibold hover:bg-myRed hover:rounded-sm">Portfolio</li>
        <li className="border border-1 border-myRed px-3 py-2 font-semibold hover:bg-myRed hover:rounded-sm">Resume</li>
        <li className="border border-1 border-myRed px-3 py-2 font-semibold hover:bg-myRed hover:rounded-sm">Services</li>
        <li className="border border-1 border-myRed px-3 py-2 font-semibold hover:bg-myRed hover:rounded-sm">Services</li>
    </>
    return (
        <div>
            <div className="navbar bg-myBlack text-white bg-opacity-50 fixed z-10 shadow-md">
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
                        <h2 className="text-xl font-bold text-white ">Sudipta Das</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:h-[65px] items-center space-x-4 ">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="myBtn myBtnShadow">Send Message</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;