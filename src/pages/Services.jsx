import { useEffect, useState } from "react";

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
                <div className="my-10">
                    <div className='flex items-center'>
                        <h3 className="text-myRed mb-3 text-xl uppercase">
                            features
                        </h3>
                        <span className="glowing-circle ms-6"></span>
                    </div>
                    <h2 className="text-7xl font-bold uppercase">what i do</h2>
                    <div className="animated-border"></div>
                </div>
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