import React, { Component } from 'react';
import styled from 'styled-components';
import Routing from './pages/Routing';

class App extends Component {
    render() {
        return (
            <Wrapper>
                <Routing />
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`;

export default App;
