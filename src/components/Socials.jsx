import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const Socials = () => {
    return (
        <div>
            <p className="text-xl font-semibold">Find me with:</p>
            <div className="flex space-x-5 text-2xl text-myGreen my-5 ">
                <a target="blank" href="https://github.com/shiningsudipto" className="myBtnShadow iconBtn rounded-full bg-slate-700/30"><FaGithub /></a>
                <a target="blank" href="https://www.linkedin.com/in/shining-sudipto/" className="myBtnShadow iconBtn rounded-full bg-slate-700/30"><FaLinkedinIn /></a>
                <a target="blank" href="https://www.facebook.com/shiningsudipto" className="myBtnShadow iconBtn rounded-full bg-slate-700/30"><FaFacebook /></a>

            </div>
        </div>
    );
};

export default Socials;