//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Rainbow2 = props => {
    return (
        <SRainbow2
            src="https://res.cloudinary.com/billpliske/image/upload/v1547066333/grandkids/rainbox2.png"
            alt="cloud"
        />
    );
};

const SRainbow2 = styled.img`
    opacity: 0.3;
    width: 100%;
    display: relative;
    margin: 0px 0 200px 0;
    z-index: 1;
`;

export default Rainbow2;
