import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

function Thanks() {
    const props = useSpring({ config: { duration: 2250 }, opacity: 1, from: { opacity: 0 } });
    return (
        <Wrapper>
            <animated.div style={props}>I will fade in</animated.div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
`;

export default Thanks;
