import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Missing extends Component {
    render() {
        return (
            <Wrapper>
                <Nash
                    src="https://res.cloudinary.com/billpliske/image/upload/v1547328058/grandkids/nash-404.jpg"
                    alt="confused Nash"
                />
                <Message>My mom says you might be lost.</Message>
                <StyledLink to="/home">
                    <p>Back to homepage</p>
                </StyledLink>
            </Wrapper>
        );
    }
}

// define your styles

const Wrapper = styled.div`
    position: relative;
    padding: 40px;
    text-align: center;
    font-family: 'Raleway', sans-serif;
`;

const Nash = styled.img`
    width: 70%;
    max-width: 200px;
    margin: 0 auto;
    border-radius: 50%;
`;

const Message = styled.h1`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 40px;
    line-height: 37px;
    padding-top: 10px;
    color: white;
`;

const StyledLink = styled(NavLink)`
    height: 50px;
    margin: 25px auto 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 80%;
    color: black !important;
    border: 1px solid black;
`;

export default Missing;
