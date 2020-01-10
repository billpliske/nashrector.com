import React from 'react';
import styled from 'styled-components';
// local
import InvitationButton from '../components/InvitationButton';
import MenuButton from '../components/MenuButton';

export default function Football() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setTimeout(function() {
        const x = document.getElementById('myAudio');
        x.play();
    }, 1000);

    return (
        <Wrapper>
            <audio id="myAudio">
                <source
                    src="https://res.cloudinary.com/billpliske/video/upload/v1578617035/grandkids/football-final.mp3"
                    type="audio/mpeg"
                />
                <track kind="captions" srcLang="en" label="english_captions"></track>
                Your browser does not support the audio element.
            </audio>
            <MenuButton />
            <Image />
            <InvitationButton />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
`;

const Image = styled.div`
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578454899/grandkids/nash-football.jpg');
    background-size: cover;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    display: block;
    background-position: -145px;
    @media screen and (min-width: 320px) {
        background-position: -145px;
    }
    @media screen and (min-width: 360px) {
        background-position: -150px;
    }
    @media screen and (min-width: 375px) {
        background-position: -158px;
    }
    @media screen and (min-width: 410px) {
        background-position: -172px;
    }
    @media screen and (min-height: 780px) {
        background-position: -219px;
    }
`;
