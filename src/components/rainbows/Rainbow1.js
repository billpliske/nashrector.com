//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Rainbow1 = props => {
    return (
        <SRainbow1
            src="https://res.cloudinary.com/billpliske/image/upload/v1547066665/grandkids/rainbow1.png"
            alt="cloud"
        />
    );
};

const SRainbow1 = styled.img`
    opacity: 0.3;
    width: 100%;
    display: relative;
    margin: 100px 0 200px 0;
    z-index: 1;
`;

export default Rainbow1;
