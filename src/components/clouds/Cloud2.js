//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Cloud2 = () => {
    return (
        <SCloud2
            src="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/cloud2.png"
            alt="cloud"
        />
    );
};

const SCloud2 = styled.img`
    position: absolute;
    z-index: 2;
    width: 10%;
    top: 80px;
    right: 40px;
`;

export default Cloud2;
