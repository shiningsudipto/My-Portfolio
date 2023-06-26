import { useEffect, useState } from "react";

const Skills = () => {
    const [skills, setSkill] = useState([]);
    useEffect(() => {
        fetch('skills.json')
            .then(res => res.json())
            .then(data => {
                setSkill(data)
            })
    }, [])
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-semibold my-4 uppercase">My Skill Set:</h3>
            <div className="grid lg:grid-cols-8 grid-cols-3 lg:gap-6 gap-2">
                {
                    skills.map((skill, idx) => (
                        <div
                            key={idx}
                            className="lg:mt-0 mt-2 bg-slate-600/30 ring-1 ring-myGreen/40 text-center backdrop-blur-sm rounded-2xl duration-200 hover:scale-105 hover:ring-myGreen mx-auto p-6 lg:w-[140px] w-[115px] relative group "
                        >
                            <img src={skill.image} className="lg:h-[80px] h-[70px] mx-auto" alt="" />
                            <div className="lg:w-[140px] w-[115px] mx-auto absolute bottom-0 left-0 transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <p className="font-semibold lg:text-xl sm:text-md lg:p-0 text-[#1cee00]">{skill.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Skills;