//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const MacRainbow = () => {
    return (
        <Image
            src="https://res.cloudinary.com/billpliske/image/upload/v1547063351/grandkids/apple-logo-rainbow.png"
            alt="old mac"
        />
    );
};

// define your styles
const Image = styled.img`
    position: absolute;
    z-index: 4;
    width: 15px;
    top: 182px;
    left: 117px;
    @media (min-width: 450px) {
        width: 22px;
        top: 294px;
        left: 190px;
    }
`;

export default MacRainbow;
