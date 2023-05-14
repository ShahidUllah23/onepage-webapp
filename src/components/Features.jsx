import React from 'react';
import FeaturesBox from './FeaturesBox';
import featureimage1 from "../images/feature_1.png";
import featureimage2 from "../images/feature_2.png";
import featureimage3 from "../images/feature_2.png";

function Features() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeaturesBox image={featureimage1} title="Development Course" />
            <FeaturesBox image={featureimage2} title="Money Saving Services " />
            <FeaturesBox image={featureimage3} title="Usability Interface" />
        </div>
    </div>
  )
}

export default Features;