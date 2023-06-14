import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
    return (
        <div className="bg-myBlack h-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;