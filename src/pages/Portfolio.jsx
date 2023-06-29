import { useState } from "react";
import Modal from "../components/Modal";
import SectionTitle from "../components/SectionTitle";
import usePortfolio from "../hook/usePortfolio";

const Portfolio = () => {
    const [portfolio] = usePortfolio();
    console.log("Portfolio", portfolio);
    const [portfolioInfo, setPortfolioInfo] = useState([])
    // const handleModal=()=>{

    // }
    return (
        <div id="portfolio">
            <div>
                <SectionTitle
                    subHeading={"VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"}
                    heading={"My Portfolio"}
                ></SectionTitle>
            </div>
            <div className="my-8">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
                    {
                        portfolio.map((singlePortfolio, index) =>
                            <div key={index}
                                className="p-4 rounded-xl myBtnShadow border border-transparent hover:border hover:border-myGreen">
                                <div className="">
                                    <img src={singlePortfolio.image}
                                        className=" rounded-xl"
                                        alt="" />
                                </div>
                                <div>
                                    <div className="flex justify-between p-3 font-semibold mt-2">
                                        <a target="blank"
                                            className="offset pLinkBtn"
                                            href={singlePortfolio.clientSide}>Client side</a>
                                        <a target="blank"
                                            className="offset pLinkBtn"
                                            href={singlePortfolio.live}>Live</a>
                                        <a target="blank"
                                            className="offset pLinkBtn me-1"
                                            href={singlePortfolio.serverSide}>Server side</a>
                                    </div>
                                    <div className="flex justify-between items-center p-3">
                                        <h3 className="lg:text-4xl text-2xl font-bold my-3">{singlePortfolio.name}</h3>

                                        <label onClick={() => setPortfolioInfo(singlePortfolio)} htmlFor="my_modal_6" className="readBtn"><span>Read More </span></label>

                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
            <Modal portfolioInfo={portfolioInfo} />
        </div>
    );
};

export default Portfolio;