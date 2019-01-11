import React, { Component } from 'react';
import styled from 'styled-components';
import ScreenOne from './components/ScreenOne';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import ScreenFour from './components/ScreenFour';

class App extends Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    <ScreenOne />
                    <ScreenTwo />
                    <ScreenThree />
                    <ScreenFour />
                </InnerWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(131, 205, 255);
    background: linear-gradient(
        0deg,
        rgba(131, 205, 255, 1) 0%,
        rgba(24, 97, 129, 1) 100%
    );
    overflow: auto;
`;

const InnerWrapper = styled.div`
    position: relative;
    text-align: center;
`;

export default App;
