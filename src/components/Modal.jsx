
const Modal = ({ portfolioInfo }) => {
    const { name, fullImage, technologyUsed, tools, description, serverSide, clientSide, live } = portfolioInfo;
    const technologyList = technologyUsed ? technologyUsed.join(', ') : '';
    const toolsUsed = tools ? tools.join(', ') : '';
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl shadow-lg">
                    <div className="card lg:card-side bg-base-100">
                        {/* <figure> */}
                        {/* <img src={fullImage} alt="Album" /> */}
                        <div className="image-wrap lg:w-[3000px] w-[260px]">
                            <p>Hover on image</p>
                            <img src={fullImage} />
                        </div>
                        {/* </figure> */}
                        <div className="card-body p-0 lg:p-4">
                            <h2 className="card-title"> {name}</h2>
                            <p className="text-lg"><span className="text-myGreen text-xl font-semibold">Technology used:</span> {technologyList}</p>
                            <p className="text-lg"><span className="text-myGreen text-xl font-semibold">Tools: </span>{toolsUsed}</p>
                            <p className="text-lg"><span className="text-myGreen text-xl font-semibold">About this project:</span> {description}</p>

                            <div className="flex justify-evenly text-myGreen text-xl mt-3">
                                <a className="border-2 py-1 px-3 rounded-lg border-myPurple hover:border-myDeepPurple" href={clientSide} target="_blank">Client Side</a>
                                <a className="border-2 py-1 px-3 rounded-lg border-myPurple hover:border-myDeepPurple" href={serverSide} target="_blank">Server Side</a>
                                <a className="border-2 py-1 px-3 rounded-lg border-myPurple hover:border-myDeepPurple" href={live} target="_blank">Live</a>
                            </div>

                            <div className="modal-action mt-2 p-0">
                                <label htmlFor="my_modal_6" className="offset pLinkBtn">Close!</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;