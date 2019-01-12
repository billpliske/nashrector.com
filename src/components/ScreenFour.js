import React, { Component } from 'react';
import styled from 'styled-components';
import Rainbow1 from './rainbows/Rainbow1';
import QuoteLeft from './QuoteLeft';
import QuoteRight from './QuoteRight';
import Monitor from './Monitor';

class ScreenFour extends Component {
    render() {
        return (
            <Wrapper>
                <RainbowWrap>
                    <Rainbow1 />
                </RainbowWrap>
                <QuoteLeft
                    quote="I've got to go to another party after this one. I do things "
                    strong="back to back."
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547309556/grandkids/steve-nash.png"
                    alt="Steve Nash"
                    padding="5px"
                />

                <Monitor url="https://res.cloudinary.com/billpliske/video/upload/v1547322484/grandkids/abc.mp4" />

                <QuoteRight
                    quote="Feliz cumpleaños, Nash! Will my friend Elmo be there?"
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547063351/grandkids/rosita-circle.png"
                    alt="Rosita"
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

export default ScreenFour;
