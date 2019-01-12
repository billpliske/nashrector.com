import React, { Component } from 'react';
import styled from 'styled-components';
import Rainbow1 from './rainbows/Rainbow1';
import QuoteLeft from './QuoteLeft';
import QuoteRight from './QuoteRight';
import Monitor from './Monitor';

class ScreenTwo extends Component {
    render() {
        return (
            <Wrapper>
                <RainbowWrap>
                    <Rainbow1 />
                </RainbowWrap>
                <QuoteLeft
                    quote="Me love birthday parties. Know what me love more?
                        Cookies!"
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/cookie-circle.png"
                    alt="Cookie Monster"
                />

                <Monitor url="https://res.cloudinary.com/billpliske/video/upload/v1547322489/grandkids/monae.mp4" />

                <QuoteRight
                    quote="Is the stupid party over yet? Hey, don't throw away the trash!"
                    character="https://res.cloudinary.com/billpliske/image/upload/v1547063350/grandkids/oscar-circle.png"
                    alt="Oscar the Grouch"
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

export default ScreenTwo;
