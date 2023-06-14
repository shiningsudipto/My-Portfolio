import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="pt-28 text-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 ">
                    <div className="mt-16">
                        <h3 className="uppercase tracking-widest">welcome to my world.</h3>
                        <img src="" alt="" />
                        <h2 className="text-6xl font-bold">Hi, I'm <span className="text-myRed">Sudipta Das</span></h2>
                        <div className="text-2xl font-bold mt-6">
                            <TypeAnimation
                                sequence={[
                                    'a Developer.',
                                    1000,
                                    'a Professional Coder.',
                                    1000,
                                    'a MERN Stack Developer.',
                                    1500,
                                    'a React Developer.',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                        <h3 className="text-xl w-2/3 mt-8">MERN stack enthusiast, blending creativity and code to build scalable web apps. Seeking exciting projects to make a lasting impact.</h3>
                        <div className="my-10">
                            <p>Find me with</p>
                            <div className="flex space-x-5 text-2xl text-myRed my-5">
                                <p className="myBtnShadow iconBtn rounded-full"><FaGithub /></p>
                                <p className="myBtnShadow iconBtn rounded-full"><FaLinkedinIn /></p>
                                <p className="myBtnShadow iconBtn rounded-full"><FaFacebook /></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-end">
                            <div className="flex flex-col items-center myBtnShadow w-3/4">
                                <img className="h-[545px] w-[390px]" src="https://rainbowit.net/html/inbio/assets/images/slider/banner-01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;