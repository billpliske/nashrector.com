//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Cloud3 = () => {
    return (
        <SCloud3
            src="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/cloud3.png"
            alt="cloud"
        />
    );
};

const SCloud3 = styled.img`
    position: absolute;
    z-index: 0;
    width: 10%;
    top: 180px;
    left: 20px;
    opacity: 0.4;
`;

export default Cloud3;
