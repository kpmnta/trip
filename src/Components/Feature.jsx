import React from 'react';
import styled from 'styled-components';
import Moto from '../media/moto.png'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1360px;
    margin: 0 auto;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        padding: 20px
    }
`;

const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Image = styled.img`
    width: 90%;
`;

const Title = styled.span`
    font-size: 70px;
    font-family: 'Passion One', sans-serif;
    @media only screen and (max-width: 480px) {
        font-size: 55px;
    }
`;

const Subtitle = styled.span`
    font-size: 24px;
    margin: 30px 0;
`;

const Description = styled.p`
    font-size: 20px;
    line-height: 1.5em;
`;

const Button = styled.button`
    width: 150px;
    border: none;
    padding: 10px 20px;
    background-color: #FF88CF;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    margin-top: 20px;
`;

const Feature = () => {
    return (
        <Container>
            <Left>
                <Image src={Moto}/>
            </Left>
            <Right>
                <Title>good design <br/> good business</Title>
                <Subtitle>We know that good design means good business</Subtitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minus eligendi optio architecto quis vitae exercitationem earum, cupiditate quos, incidunt fugit temporibus enim sapiente nostrum ipsa deleniti nisi officiis. Facere ipsa id temporibus sapiente voluptates?</Description>
                <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus hic ex, perspiciatis fugiat inventore rem.</Description>
                <Button>learn more</Button>
            </Right>
        </Container>
    )
}

export default Feature
