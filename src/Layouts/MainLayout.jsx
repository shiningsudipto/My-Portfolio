import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
import { useEffect, useState } from "react";
import loading from '../../public/BOXS.json'
import Lottie from 'react-lottie-player'

const MainLayout = () => {

    const [displayContent, setDisplayContent] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayContent(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="">
            {
                displayContent ? <>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </>
                    :
                    <div className="h-screen w-full flex justify-center items-center">
                        <Lottie
                            loop
                            animationData={loading}
                            play
                            className='lg:mt-0 h-60'
                        />
                    </div>
            }
        </div>
    );
};

export default MainLayout;