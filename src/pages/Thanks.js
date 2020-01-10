import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

function Thanks() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const props = useSpring({ config: { duration: 2250 }, opacity: 1, from: { opacity: 0 } });
    return (
        <Wrapper>
            <animated.div style={props}>I will fade in</animated.div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
`;

export default Thanks;
