import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import Cloud1 from './clouds/Cloud1';
import Cloud2 from './clouds/Cloud2';
import Cloud3 from './clouds/Cloud3';
import Rainbow2 from './rainbows/Rainbow2';

class ScreenOne extends Component {
    render() {
        return (
            <Front>
                <RainbowWrap>
                    <Rainbow2
                        src="https://res.cloudinary.com/billpliske/image/upload/v1547066333/grandkids/rainbox2.png"
                        alt="rainbow"
                    />
                </RainbowWrap>
                <Cloud2 />
                <Cloud3 />
                <SCloud4 />
                <FrontContentWrapper>
                    <Mug
                        src="https://res.cloudinary.com/billpliske/image/upload/v1547177300/grandkids/nash-top-excited.png"
                        alt="Nash"
                    />
                    <Title>
                        Nash turns <One>one!</One>
                    </Title>
                    <Readout>(Please RSVP at bottom)</Readout>
                </FrontContentWrapper>
                <Arrow
                    src="https://res.cloudinary.com/billpliske/image/upload/v1547152137/grandkids/arrow.png"
                    alt="arrow"
                />
            </Front>
        );
    }
}

const bounce = keyframes`
 0%,
    20%,
    50%,
    80%,
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    60% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
    }
    `;

const Front = styled.div`
    position: relative;
    display: grid;
    list-style-type: none;
    padding: 0;
    margin: 0;
    grid-template-columns: 1;
    justify-content: center;
    align-items: middle;
    place-items: center;
    height: 100vh;
`;

const SCloud4 = styled(Cloud1)`
    &[style] {
        position: absolute;
        z-index: 2;
        width: 50%;
        top: 220px;
        right: 20px;
        opacity: 0.5;
    }
`;

const FrontContentWrapper = styled.div`
    position: relative;
    margin-top: -60px;
`;

const RainbowWrap = styled.span`
    position: absolute;
    margin-top: 150px;
    z-index: 1;
`;

const Mug = styled.img`
    position: relative;
    display: block;
    width: 145px;
    margin: 0 auto;
    z-index: 2;
    @media (min-width: 450px) {
        width: 210px;
    }
`;

const Title = styled.h1`
    position: relative;
    margin: 0 auto;
    z-index: 2;
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    font-size: 70px;
    font-style: italic;
    line-height: 61px;
    text-transform: uppercase;
    width: 80%;
    letter-spacing: -1px;
    color: white;
    text-shadow: 1px 1px 13px #133d4c;
`;

const Readout = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    font-style: italic;
    padding-top: 10px;
    color: #000000;
    letter-spacing: 1px;
    position: relative;
    z-index: 2;
`;

const One = styled.span`
    background: rgb(255, 55, 55);
    background: linear-gradient(
        0deg,
        rgba(255, 55, 55, 1) 0%,
        rgba(255, 240, 36, 1) 25%,
        rgba(87, 255, 79, 1) 51%,
        rgba(92, 168, 255, 1) 73%,
        rgba(241, 88, 255, 1) 95%
    );
    -webkit-background-clip: text;
    -webkit-text-stroke: 6px transparent;
    color: #232d2d;
`;

const Arrow = styled.img`
    position: absolute;
    display: block;
    bottom: 40px;
    width: 35px;
    opacity: 0.3;
    animation: ${bounce} 2s infinite;
`;

export default ScreenOne;
