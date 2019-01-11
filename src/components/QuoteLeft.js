import React, { Component } from 'react';
import styled from 'styled-components';

class QuoteLeft extends Component {
    render() {
        const { quote, character, alt, strong, padding } = this.props;
        return (
            <QuoteWrapper>
                <Quote>
                    "{quote}
                    <Strong>{strong}</Strong>"
                </Quote>
                <Character src={character} alt={alt} padding={padding} />
            </QuoteWrapper>
        );
    }
}

const QuoteWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 200px 120px;
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
    text-align: right;
    color: black;
    font-size: 17px;
`;

const Character = styled.img`
    width: 120px;
    height: 120px;
    background-color: orange;
    border-radius: 60px;
    padding: ${props => props.padding || '0px'};
`;

const Strong = styled.span`
    font-weight: 800;
    color: maroon;
    font-style: italic;
`;

export default QuoteLeft;
