import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';

function Thanks() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    return (
        <Wrapper>
            <ContentWrapper>
                <Title>Thanks!</Title>
                <Text>Nash is looking forward to seeing you at the party!</Text>
                <Promo>
                    Go back to the <StyledLink to="/home">homepage.</StyledLink>
                </Promo>
            </ContentWrapper>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    position: relative;
    font-family: 'raleway', sans-serif;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 80px 30px 30px 30px;
    max-width: 800px;
    z-index: 2;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 50px;
    font-style: italic;
    margin-bottom: 15px;
    color: white;
`;

const Text = styled.p`
    width: 85%;
    max-width: 600px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    color: black;
    margin: 0 auto;
`;

const Promo = styled.p`
    margin: 40px auto 20px auto;
    width: 85%;
    max-width: 600px;
    font-size: 24px;
    font-style: italic;
    line-height: 30px;
    font-weight: 600;
    color: black;
    &:first-of-type {
        margin-top: 0;
    }
    a {
        color: gold !important;
        font-weight: 600;
        text-decoration: underline !important;
    }
`;

const StyledLink = styled(NavLink)`
    color: var(--cornflower);
`;

export default Thanks;
