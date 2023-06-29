import { useEffect, useState } from "react";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const SkillSlider = () => {

    const [skills, setSkill] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => {
                setSkill(data)
            })
    }, [])

    const animation = { duration: 10000, easing: (t) => t }
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        mode: "free",
        breakpoints: {
            '(min-width: 820px)': {
                slides: {
                    perView: 8,
                    spacing: 5,
                },
            },
            '(max-width: 450px)': {
                loop: false,
                slides: {
                    perView: 3,
                    spacing: 2,
                },
            },
        },

        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })

    return (
        <div>
            <h2 className="font-semibold text-xl mt-3 mb-2">Tools and technology I'm familiar with:</h2>
            <div ref={sliderRef} className="keen-slider">
                {/* {
                    skills.map((skill, idx) => (
                        <div key={idx} className="keen-slider__slide number-slide1 py-2">
                            <div
                                className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                            >
                                <img src={skill.image} className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                                <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">{skill.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                } */}
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/YjqNmZL/html.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">HTML</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/SX276G7/css.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">CSS</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/jwqTzDd/bootstrap.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Bootstrap</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/mbC2t6w/tailwind.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/Z8vpXzB/js.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/V3Sdqt8/git.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Git</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/RPfXW1z/github-icon.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">GitHub</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/c19VQky/react.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">React.js</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/R6TQ7nR/node.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Node.js</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/80YCHX7/expressjs.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Express.js</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/h2fXhpg/mongo-db.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/frdCz7M/firebase.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Firebase</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/qCKCSLq/nextjs.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Next.js</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/vcHW0WY/redux.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Redux</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/t2DSkMg/jwt.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">JWT</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/b5bJ3yb/Rest-API-1.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">REST API</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/hWLqygn/figma.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Figma</p>
                        </div>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1 py-2">
                    <div
                        className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myPurple mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                    >
                        <img src="https://i.ibb.co/rkgPY81/psd.png" className="lg:h-[80px] h-[65px] mx-auto" alt="" />
                        <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-white">Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSlider;

// breakpoints: {
//     '(min-width: 8021px)': {
//         slides: {
//             perView: 8,
//             spacing: 10,
//         },
//     },
//     '(max-width: 820px)': {
//         slides: {
//             perView: 5,
//             spacing: 5,
//         },
//     },
//     '(max-width: 450px)': {
//         loop: false,
//         slides: {
//             perView: 3,
//             spacing: 2,
//         },
//     },
// },