import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
// local

class Home extends React.Component {
    render() {
        return (
            <Wrapper>
                <NavLink to="/menu">
                    <Nashhome />
                </NavLink>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
`;

const Nashhome = styled.div`
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578368883/grandkids/nash-home-2.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
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

export default Home;
