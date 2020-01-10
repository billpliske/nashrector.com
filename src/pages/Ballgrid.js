import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Ballgrid() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return (
        <Wrapper>
            <Tennis>
                <StyledLink to="/tennis">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578272640/grandkids/tennis_ball.png"
                        alt=""
                    />
                </StyledLink>
            </Tennis>

            <Soccer>
                <StyledLink to="/soccer">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578272639/grandkids/soccer_ball.png"
                        alt=""
                    />
                </StyledLink>
            </Soccer>
            <Golf>
                <StyledLink to="/golf">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578272639/grandkids/golf_ball.png"
                        alt=""
                    />
                </StyledLink>
            </Golf>
            <Basketball>
                <StyledLink to="/basketball">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578272639/grandkids/basketball.png"
                        alt=""
                    />
                </StyledLink>
            </Basketball>
            <Football>
                <StyledLink to="/football">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578272639/grandkids/football.png"
                        alt=""
                    />
                </StyledLink>
            </Football>
            <Baseball>
                <StyledLink to="/baseball">
                    <img
                        src="https://res.cloudinary.com/billpliske/image/upload/v1578539130/grandkids/baseball.png"
                        alt="pool ball"
                    />
                </StyledLink>
            </Baseball>
            <HomeLink>
                <StyledLink to="/">Back to home</StyledLink>
            </HomeLink>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    div a {
        display: grid;
        justify-items: center;
        align-items: center;
    }

    img {
        width: 75%;
    }
`;

const StyledLink = styled(NavLink)`
    height: 100%;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;

const Tennis = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-color: gray;
`;

const Soccer = styled.div`
    grid-column: 2 / 2;
    grid-row: 1 / 2;
    background-color: maroon;
`;

const Golf = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    background-color: darkgreen;
`;

const Basketball = styled.div`
    grid-column: 2 / 2;
    grid-row: 2 / 3;
    background-color: purple;
`;

const Football = styled.div`
    grid-column: 1 / 2;
    grid-row: 3 / 3;
    background-color: goldenrod;
    img {
        width: 90%;
        transform: rotate(-90deg);
    }
`;

const Baseball = styled.div`
    grid-column: 2 / 2;
    grid-row: 3 / 3;
    background-color: royalblue;
`;

const HomeLink = styled.div`
    grid-column: auto / span 2;
    grid-row: 4 / 4;
    background-color: royalblue;
    height: 80px;
`;
