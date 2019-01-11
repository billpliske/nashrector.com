//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Cloud1 = () => {
    return (
        <SCloud1
            src="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/cloud1.png"
            alt="cloud"
        />
    );
};

const SCloud1 = styled.img`
    position: absolute;
    z-index: 2;
    width: 20%;
    top: 40px;
    left: 40px;
`;

export default Cloud1;
