import React from 'react';

function FeaturesBox(props) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={props.image} />
        </div>
        <div className='s-b-text'>
            <h2>{props.title}</h2>
            <p>Lorem Ipsum is simply dummy text of the gul chahat.</p>
        </div>
    </div>
  )
}

export default FeaturesBox;