import React, { Component } from "react";
import styled from "styled-components";
// import ScreenOne from "./components/ScreenOne";
// import Rainbow1 from "./components/rainbows/Rainbow1";
// import Rainbow2 from "./components/rainbows/Rainbow2";
// import Rainbow3 from "./components/rainbows/Rainbow3";

class App extends Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    {/* <ScreenOne /> */}

                    {/* <Rainbow1 />
                    <Rainbow2 />
                    <Rainbow3 /> */}
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
