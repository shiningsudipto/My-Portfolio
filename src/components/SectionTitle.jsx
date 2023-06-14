
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mt-14 mb-8 text-center">
            <h3 className="text-myRed mb-3 text-xl uppercase">{subHeading}</h3>
            <h2 className="text-7xl font-bold uppercase">{heading}</h2>
        </div>
    );
};

export default SectionTitle;
