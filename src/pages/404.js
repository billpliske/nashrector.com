import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Missing extends Component {
    render() {
        const { closeMenu } = this.props;
        return (
            <Wrapper>
                <h1>404 page</h1>
                <StyledLink onClick={closeMenu} to="/home">
                    <p>Back to homepage</p>
                    {(function(name) {
                        var comic = 'Batman';
                        console.log(name + ' is ' + comic);
                    })('Bill')}
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
    h1 {
        margin-top: 60px;
    }
`;

const StyledLink = styled(NavLink)`
    height: 50px;
    margin: 0;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
`;

export default Missing;
