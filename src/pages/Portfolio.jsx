import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Portfolio = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
                    heading={"My Portfolio"}
                ></SectionTitle>
            </div>
            <div className="my-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {
                        data.map((portfolio, index) =>
                            <div key={index}
                                className="p-3 rounded-xl myBtnShadow">
                                <div className="">
                                    <img src={portfolio.image}
                                        className="h-80 rounded-xl"
                                        alt="" />
                                </div>
                                <div>
                                    <div className="flex justify-between p-3 font-semibold">
                                        <p>Client side</p>
                                        <p>Live</p>
                                        <p>Server side</p>
                                    </div>
                                    <h3 className="text-2xl font-bold text-myRed">{portfolio.name}</h3>
                                    <button className="">Read More</button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;