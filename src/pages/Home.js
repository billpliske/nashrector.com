import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// local

export default function Home() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return (
        <Wrapper id="wrapper">
            <NavLink to="/menu">
                <Nashhome />
            </NavLink>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
`;

const Nashhome = styled.div`
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578368883/grandkids/nash-home-2.jpg');
    background-size: cover;
    height: 100%;
    width: 100%;
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
