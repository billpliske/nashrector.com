import React, { Component } from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import Rainbow2 from '../components/rainbows/Rainbow2';

class Thanks extends Component {
    render() {
        return (
            <Wrapper>
                <RainbowWrap>
                    <Rainbow2 />
                </RainbowWrap>

                <ContentWrapper>
                    <Title>Thanks!</Title>
                    <Text>
                        Nash is looking forward to seeing you at the party!
                    </Text>
                    <Promo>
                        Go back to the{' '}
                        <StyledLink to="/home">homepage.</StyledLink>
                    </Promo>
                </ContentWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    font-family: 'raleway', sans-serif;
`;

const RainbowWrap = styled.div`
    position: absolute;
    margin-top: 150px;
    z-index: 1;
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
    font-weight: 500;
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
    font-weight: 400;
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
