import React, { Component } from 'react';
import styled from 'styled-components';
import Rainbow1 from './rainbows/Rainbow1';
import QuoteLeft from './QuoteLeft';
import QuoteRight from './QuoteRight';
import Monitor from './Monitor';

class ScreenThree extends Component {
    render() {
        return (
            <Wrapper>
                <RainbowWrap>
                    <Rainbow1 />
                </RainbowWrap>
                <QuoteLeft
                    quote="Can you come even if you're really tall? Ooooh, can I bring my friend, Larry?"
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/bigbird-circle.png"
                    alt="Big Bird"
                />

                <Monitor url="https://res.cloudinary.com/billpliske/video/upload/v1547322489/grandkids/sheeran.mp4" />

                <QuoteRight
                    quote="Elmo likes to go to birthday parties! Are you ticklish, Nash?"
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/elmo-circle.png"
                    alt="Elmo"
                />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
`;

const RainbowWrap = styled.div`
    position: absolute;
    margin-top: 20px;
    z-index: 1;
`;

export default ScreenThree;
