import React from 'react';
import styled from 'styled-components';
import Welcome from '../media/welcome.png';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
    max-width: 1360px;
    margin: 0 auto;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
    font-family: 'Passion One', sans-serif;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`; 

const Description = styled.p`
    font-size: 20px;
    width: 60%;
    margin-top: 20px;
`; 

const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
    }
`; 

const Button = styled.button`
    padding: 15px;
    background-color: #019492;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    border: none;

    @media only screen and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
    color: #FF88CF;
    font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
`;

const Right = styled.div`
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 100%;
`

const Intro = () => {
    return (
        <Container>
            <Left>
                <Title>Adventures in creative age</Title>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dicta quo praesentium ex. Eos, aspernatur repudiandae alias unde tempore similique nobis dolor. Facilis adipisci sed praesentium hic quis doloremque eos?</Description>
                <Info>
                    <Button>start a project</Button>
                    <Contact>
                        <Phone>Call Us (11) 99999-0000</Phone>
                        <ContactText>For any question or concern </ContactText>
                    </Contact>
                </Info>
            </Left>
            <Right>
                <Image src={Welcome}></Image>
            </Right>
        </Container>
    )
}

export default Intro;
