import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import resume from '../../public/Resume of Sudipta Das.pdf'
import myImg2 from '../assets/myImg-Sudipto.png'
import Socials from "../components/Socials";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


const Banner = () => {
    return (
        <div id="home" className="lg:pt-28 pt-20">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="lg:mt-16 mt-0 px-3">
                        <Fade left>
                            <h3 className="uppercase tracking-widest">welcome to my world.</h3>
                        </Fade>
                        <img src="" alt="" />
                        <Zoom bottom>
                            <h2 className="lg:text-6xl text-4xl font-bold">Hi, I'm <span className="text-myGreen">Sudipta Das</span></h2>
                        </Zoom>
                        <div className="text-sm lg:text-2xl text-[#9043E2] font-bold lg:mt-6 mt-2 mb-4">
                            <TypeAnimation
                                sequence={[
                                    'a Web Developer.',
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
                        <h3 className="text-xl lg:w-2/3 w-full">MERN stack enthusiast, blending creativity and code to build scalable web apps. Seeking exciting projects to make a lasting impact.</h3>
                        <div className="lg:my-10 mt-4 mb-14">
                            <Socials />
                            <div className="my-8">
                                <a className="myBtn myBtnShadow md:hidden" href={resume} download="resume of Sudipta Das">Download Resume</a>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex lg:justify-end justify-center">
                            <div className="flex flex-col items-center rounded-md lg:w-3/5 w-[235px] mt-4 ">
                                <img className="rounded-md w-full myBtnShadow  border-2 border-[#9043E2] " src={myImg2} alt="" />
                                <img className="lg:h-16 h-12 floatingImage reactFloating lg:mt-[-450px] lg:ms-[-270px] mt-[-315px] ms-[-230px]" src="https://i.ibb.co/c19VQky/react.png" alt="" />
                                <img className="lg:h-16 h-12 floatingImage nodeFloating lg:mt-[120px] lg:ms-[250px] mt-[100px] ms-[150px]" src="https://i.ibb.co/R6TQ7nR/node.png" alt="" />
                                <img className="lg:h-16 h-12 floatingImage mongoDBFloating lg:mt-[80px] lg:ms-[-380px] mt-[90px] ms-[-235px]" src="https://i.ibb.co/h2fXhpg/mongo-db.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;