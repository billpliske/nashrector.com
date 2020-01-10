import React from 'react';
import styled from 'styled-components';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';

export default function MenuButton() {
    return (
        <Wrapper>
            <StyledLink to="/menu">
                <FaBars />
            </StyledLink>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    z-index: 4;
`;

const StyledLink = styled(NavLink)`
    height: 100%;
    width: 100%;

    &:hover {
        cursor: pointer;
    }

    svg {
        width: 25px !important;
        height: 25px !important;
    }
`;
