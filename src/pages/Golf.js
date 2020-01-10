import React from 'react';
import styled from 'styled-components';
// local
import InvitationButton from '../components/InvitationButton';
import MenuButton from '../components/MenuButton';

export default function Golf() {
    setTimeout(function() {
        const x = document.getElementById('myAudio');
        x.play();
    }, 1000);
    return (
        <Wrapper>
            <audio id="myAudio">
                <source
                    src="https://res.cloudinary.com/billpliske/video/upload/v1578617035/grandkids/golf-final.mp3"
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
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578454899/grandkids/nash-golf.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: block;
    background-position: -94px;
    @media screen and (min-width: 320px) {
        background-position: -94px;
    }
    @media screen and (min-width: 360px) {
        background-position: -104px;
    }
    @media screen and (min-width: 375px) {
        background-position: -113px;
    }
    @media screen and (min-width: 410px) {
        background-position: -122px;
    }
    @media screen and (min-height: 780px) {
        background-position: -182px;
    }
`;
