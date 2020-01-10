import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function InvitationButton() {
    return (
        <Button>
            <StyledLink to="/invitation">Go to invitation</StyledLink>
        </Button>
    );
}

const Button = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    font-family: Raleway, sans-serif;
    font-weight: 700;
    font-size: 25px;
    font-style: italic;
`;

const StyledLink = styled(NavLink)`
    height: 100%;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;
