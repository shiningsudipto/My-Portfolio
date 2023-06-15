import SectionTitle from "../components/SectionTitle";
import usePortfolio from "../hook/usePortfolio";

const Portfolio = () => {
    const [portfolio] = usePortfolio();
    console.log("Portfolio", portfolio);
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
                    heading={"My Portfolio"}
                ></SectionTitle>
            </div>
            <div>

            </div>
            <div className="my-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {
                        portfolio.map((singlePortfolio, index) =>
                            <div key={index}
                                className="p-3 rounded-xl myBtnShadow border border-transparent hover:border hover:border-myRed">
                                <div className="">
                                    <img src={singlePortfolio.image}
                                        className="h-80 rounded-xl"
                                        alt="" />
                                </div>
                                <div>
                                    <div className="flex justify-between p-3 font-semibold">
                                        <p>Client side</p>
                                        <p>Live</p>
                                        <p>Server side</p>
                                    </div>
                                    <h3 className="text-2xl font-bold text-myRed">{singlePortfolio.name}</h3>
                                    <button className="custom-btn btn-3"><span>Read More</span></button>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;