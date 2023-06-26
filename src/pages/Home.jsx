import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Services />
            <Portfolio />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;