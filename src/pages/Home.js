import React, { Component } from 'react';
import styled from 'styled-components';
import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';
import ScreenFour from '../components/ScreenFour';
import Contact from '../components/Contact';

class Home extends Component {
    render() {
        return (
            <Wrapper>
                <ScreenOne />
                <ScreenTwo />
                <ScreenThree />
                <ScreenFour />
                <Contact />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
`;

export default Home;
