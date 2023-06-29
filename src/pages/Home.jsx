import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import MyServices from "./MyServices";
import Portfolio from "./Portfolio";
import Services from "./Services";
import SkillSlider from "./SkillSlider";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <MyServices />
            {/* <Services /> */}
            <Portfolio />
            <About />
            {/* <Skills /> */}
            <SkillSlider />
            <Contact />
        </div>
    );
};

export default Home;