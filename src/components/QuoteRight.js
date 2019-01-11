import React, { Component } from 'react';
import styled from 'styled-components';

class QuoteRight extends Component {
    render() {
        const { quote, character, alt } = this.props;
        return (
            <QuoteWrapper>
                <Character src={character} alt={alt} />
                <Quote>"{quote}"</Quote>
            </QuoteWrapper>
        );
    }
}

const QuoteWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 120px 200px;
    grid-gap: 10px;
    justify-content: center;
    align-items: middle;
    place-items: center;
    padding: 0 40px;
    margin: 70px 0;
    z-index: 2;
`;

const Quote = styled.p`
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-align: left;
    color: black;
    font-size: 17px;
`;

const Character = styled.img`
    width: 120px;
    height: 120px;
    background-color: orange;
    border-radius: 60px;
`;

export default QuoteRight;
