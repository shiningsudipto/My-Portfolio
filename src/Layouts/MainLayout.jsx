import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <h1>Main Layout</h1>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;