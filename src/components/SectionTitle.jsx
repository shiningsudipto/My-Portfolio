
// const SectionTitle = ({ heading, subHeading }) => {
//     return (
//         <div className="my-8">
//             <h3 className="text-myRed mb-3 text-xl uppercase">{subHeading}</h3>
//             <h2 className="text-7xl font-bold uppercase">{heading}</h2>
//         </div>
//     );
// };

// export default SectionTitle;

// import React from 'react';

import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="my-10">
            <div className='flex items-center'>
                <h3 className="text-myRed mb-3 text-xl uppercase">
                    {subHeading}
                </h3>
                <span className="glowing-circle ms-6"></span>
            </div>
            <h2 className="text-7xl font-bold uppercase">{heading}</h2>
            <div className="animated-border"></div>
        </div>
    );
};

export default SectionTitle;
