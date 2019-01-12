import React, { Component } from 'react';
import styled from 'styled-components';
import Rainbow2 from './rainbows/Rainbow2';
import Monitor from './Monitor';

class Contact extends Component {
    render() {
        return (
            <Wrapper id="contact">
                <RainbowWrap>
                    <Rainbow2 />
                </RainbowWrap>
                <Monitor url="https://res.cloudinary.com/billpliske/video/upload/v1547322487/grandkids/sandler.mp4" />

                <ContentWrapper>
                    <Title>Please RSVP!</Title>
                    <Details>
                        <li>
                            <Strong> Date: </Strong>January 26th, 2019
                        </li>
                        <li>
                            <Strong> Time: </Strong> 2-4 pm
                        </li>
                        <li>
                            <Strong> Address: </Strong> 15149 S. Sells Dr.
                            Goodyear, AZ 85345
                        </li>
                        <li>
                            RSVP <Strong> below </Strong> by January 19th!
                        </li>
                    </Details>

                    <Form>
                        <form
                            action="https://formspree.io/epliske@gmail.com"
                            method="POST"
                        >
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your name"
                            />
                            <Input
                                type="text"
                                name="_replyto"
                                placeholder="Your email address"
                            />
                            <Hide type="text" name="_gotcha" />
                            <Input
                                type="text"
                                name="coming"
                                placeholder="How many are coming?"
                            />
                            <Input
                                type="hidden"
                                name="_next"
                                value="https://www.nashrector.com/#/thanks"
                            />
                            <Submit type="submit" value="Submit">
                                Submit
                            </Submit>
                        </form>
                    </Form>
                </ContentWrapper>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
    padding-bottom: 50px;
`;

const RainbowWrap = styled.div`
    position: absolute;
    margin-top: 80px;
    z-index: 1;
`;

const Form = styled.div`
    position: relative;
    text-align: left;
    width: 100%;
    max-width: 600px;
`;

const Hide = styled.input`
    display: none;
`;

const Input = styled.input`
    padding: 10px;
    display: block;
    width: 100%;
    max-width: 550px;
    font-size: 15px;
    margin-bottom: 10px;
    border: 1px solid var(--cornflower);
`;

const Submit = styled.button`
    padding: 15px;
    font-size: 16px;
    display: block;
    width: 200px;
    background-color: var(--cornflower);
    color: white;
    font-family: 'raleway', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 18px;
    border: 1px solid var(--cornflower);
    &:focus {
        outline: none;
        border: none;
    }
`;
const ContentWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    padding: 80px 30px 30px 30px;
    max-width: 800px;
    z-index: 2;
`;

const Title = styled.h1`
    font-family: 'raleway', sans-serif;
    font-weight: 600;
    font-size: 40px;
    font-style: italic;
    margin-bottom: 15px;
    color: white;
    /* @media (max-width: 320px) {
        font-size: 60px;
    } */
`;

const Details = styled.ul`
    font-family: 'raleway', sans-serif;
    width: 90%;
    font-weight: 400;
    max-width: 500px;
    text-align: left;
    margin: 0 0 20px 25px;
    li {
        margin-bottom: 6px;
    }
`;

const Strong = styled.span`
    font-weight: 800;
`;

export default Contact;
