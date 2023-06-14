import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Services />
            <Portfolio />
            <About />
            <Contact />
        </div>
    );
};

export default Home;