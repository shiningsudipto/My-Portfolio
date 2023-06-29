
const Modal = ({ portfolioInfo }) => {
    const { name, } = portfolioInfo;
    return (
        <div>
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-[#000b1a] shadow-lg">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className="py-4"></p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;