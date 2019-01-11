import React, { Component } from 'react';
import styled from 'styled-components';

class Monitor extends Component {
    render() {
        return (
            <Wrapper>
                <Mac
                    src="https://res.cloudinary.com/billpliske/image/upload/v1547248466/grandkids/imac.png"
                    alt="monitor"
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
`;

const Mac = styled.img`
    position: relative;
    width: 80%;
    max-width: 400px;
    z-index: 2;
`;

export default Monitor;
