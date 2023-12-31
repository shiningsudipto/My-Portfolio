import useServices from "../hook/useServices";

const Services = () => {
    const [services] = useServices();
    console.log("Services", services);
    return (
        <div id="services">
            <div>
                <div className="my-10">
                    <div className='flex items-center'>
                        <h3 className="text-myGreen font-semibold mb-3 text-xl uppercase">
                            features
                        </h3>
                    </div>
                    <h2 className="lg:text-7xl text-4xl font-bold uppercase">what i do</h2>
                    <div className="animated-border"></div>
                </div>
            </div>
            <div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 border">
                    {
                        services.map((service, index) => <div key={index}>
                            <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        {/* <h2>{service.name}.</h2> */}
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