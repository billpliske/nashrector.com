import React from 'react';
import styled from 'styled-components';
// local
import MenuButton from '../components/MenuButton';
import BahBah from '../components/BahBah';

export default function Invitation() {
    return (
        <Wrapper id="contact">
            <Screen />
            <BahBah />
            <MenuButton />
            <ContentWrapper>
                <Title>RSVP!</Title>
                <Details>
                    <li>
                        <Strong> Date: </Strong>January 26th, 2020
                    </li>
                    <li>
                        <Strong> Time: </Strong> 1-3pm
                    </li>
                    <li>
                        <Strong> Place: </Strong> Rector-Pliske house
                    </li>
                    {/* <li>
                <Strong> Address: </Strong> 19661 W. Washington St.
                Buckeye, AZ 85326
            </li> */}
                    <li>
                        RSVP <Strong> below </Strong> by January 19th!
                    </li>
                </Details>

                <Form>
                    <form action="https://formspree.io/epliske@gmail.com" method="POST">
                        <Input type="text" name="name" placeholder="Your name" />
                        <Input type="text" name="_replyto" placeholder="Your email address" />
                        <Hide type="text" name="_gotcha" />
                        <Input type="text" name="coming" placeholder="How many are coming?" />
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

const Wrapper = styled.div`
    background-image: url('https://res.cloudinary.com/billpliske/image/upload/v1578546354/grandkids/balls.jpg');
    background-size: cover;
    display: block;
    height: 100vh;
    position: relative;
    width: 100vw;
`;

const Screen = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    position: absolute;
    width: 100vw;
    z-index: 1;
`;

const Form = styled.div`
    max-width: 600px;
    position: relative;
    text-align: left;
    width: 100%;
`;

const Hide = styled.input`
    display: none;
`;

const Input = styled.input`
    border: 1px solid var(--cornflower);
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    max-width: 550px;
    padding: 20px;
    width: 100%;
`;

const Submit = styled.button`
    background-color: var(--cornflower);
    border: 1px solid var(--cornflower);
    color: white;
    display: block;
    font-family: 'raleway', sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin: 18px 0 50px 0;
    padding: 15px;
    text-transform: uppercase;
    width: 200px;
    &:focus {
        outline: none;
        border: none;
    }
`;
const ContentWrapper = styled.div`
    color: white;
    margin: 0 auto;
    max-width: 800px;
    padding: 50px 30px 60px 30px;
    position: relative;
    z-index: 2;
`;

const Title = styled.h1`
    color: white;
    font-family: 'raleway', sans-serif;
    font-size: 50px;
    font-style: italic;
    font-weight: 600;
    margin-bottom: 15px;
    /* @media (max-width: 320px) {
        font-size: 60px;
    } */
`;

const Details = styled.ul`
    font-family: 'raleway', sans-serif;
    font-weight: 500;
    margin: 0 0 20px 25px;
    max-width: 500px;
    text-align: left;
    width: 90%;
    li {
        margin-bottom: 6px;
        font-size: 17px;
    }
`;

const Strong = styled.span`
    font-weight: 800;
`;
