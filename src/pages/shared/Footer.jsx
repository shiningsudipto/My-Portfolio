import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="footer footer-center p-6 bg-myPurple text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by <Link to="/" className="font-semibold text-lg">Sudipta Das</Link></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;