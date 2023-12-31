import useServices from "../hook/useServices";
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
const MyServices = () => {
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
                    <Slide left>
                        <h2 className="lg:text-7xl text-4xl font-bold uppercase">what i do</h2>
                    </Slide>
                    <div className="animated-border"></div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-3">
                    {
                        services.map((service, idx) =>
                            <div key={idx}
                                className="p-6 myBtnShadow rounded-lg serviceCard bg-slate-700/30 hover:bg-slate-600/30"
                            >
                                <Slide bottom>
                                    <div>
                                        <img src={service.icon} className="h-20 mb-8" alt="" />
                                        <h3 className="text-2xl font-semibold">{service.name}</h3>
                                        <p className="mt-6">{service.description}</p>
                                    </div>
                                </Slide>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyServices;