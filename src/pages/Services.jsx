import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"features"}
                    heading={"What i do"}
                ></SectionTitle>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        data.map((service, index) => <div key={index}>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <h2>{service.name}.</h2>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                                <div className="face face2 txt-center">
                                    <h2>{service.name}</h2>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default Services;