import React from 'react';
import styled from 'styled-components';

export default function BahBah() {
    setTimeout(function() {
        const y = document.getElementById('bahbah');
        y.style.left = '20%';
        y.style.top = '35%';
    }, 1000);
    setTimeout(function() {
        const z = document.getElementById('myAudio');
        z.play();
    }, 1500);

    setTimeout(function() {
        const y = document.getElementById('bahbah');
        y.style.left = '-200%';
    }, 3000);

    return (
        <>
            <audio id="myAudio">
                <source
                    src="https://res.cloudinary.com/billpliske/video/upload/v1578619611/grandkids/bah-bah.mp3"
                    type="audio/mpeg"
                />
                <track kind="captions" srcLang="en" label="english_captions"></track>
                Your browser does not support the audio element.
            </audio>
            <Image
                id="bahbah"
                src="https://res.cloudinary.com/billpliske/image/upload/v1578619050/grandkids/nash-bah-bah.jpg"
                alt="bahbah"
            />
        </>
    );
}

const Image = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
    left: -1000px;
    position: absolute;
    transition: 1s ease-in-out;
    z-index: 6;
`;
