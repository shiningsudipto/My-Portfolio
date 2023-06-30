import Bounce from 'react-reveal/Bounce';
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-14 mb-8 text-center">
            <Swing>
                <h3 className="text-myGreen font-semibold mb-3 text-xl uppercase">{subHeading}</h3>
            </Swing>
            <Fade bottom>
                <h2 className="lg:text-7xl text-4xl font-bold uppercase"><span className="text-myGreen">&#10094;</span>{heading}<span className="text-myGreen">&#47;&#10095;</span></h2>
            </Fade>
        </div>
    );
};

export default SectionTitle;
