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
            <Screen />
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
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578629850/grandkids/nash-thanks.jpg');
    background-size: cover;
    display: block;
    background-position: -140px;
    @media screen and (min-width: 320px) {
        background-position: -90px;
    }
    @media screen and (min-width: 360px) {
        background-position: -85px;
    }
    @media screen and (min-width: 375px) {
        background-position: -110px;
    }
    @media screen and (min-width: 410px) {
        background-position: -130px;
    }
`;

const Screen = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    position: absolute;
    width: 100vw;
    z-index: 1;
`;

const ContentWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 80px 30px 30px 30px;
    max-width: 800px;
    z-index: 2;
    color: white;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 50px;
    font-style: italic;
    margin-bottom: 15px;
    color: white;
`;

const Text = styled.p`
    max-width: 600px;
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
    margin: 0 auto;
`;

const Promo = styled.p`
    margin: 40px auto 20px auto;
    max-width: 600px;
    font-size: 24px;
    font-style: italic;
    line-height: 30px;
    font-weight: 600;

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
