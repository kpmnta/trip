import React, { useState } from 'react';
import styled from 'styled-components';
import How from '../media/how.png';
import ExplanationVideo from '../media/explanationvideo.mp4';
import MiniCard from './MiniCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const Image = styled.img`
    width: 70%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    display: ${props => props.open && "none"};
`;

const Video = styled.video`
    display: ${props => !props.open && "none"};
    height: 325px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;

const Right = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 480px) {
        padding: 20px;
    }
`;

const Title = styled.h1`
    font-family: 'Passion One', sans-serif;
    font-size: 46px;
`;

const Description = styled.p`
    margin-top: 40px;
    font-size: 20px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
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
    margin-left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
        opacity: 0.8
    }
`;

const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.5);
    display: flex;
    justify-content: center;
`;

const CloseButton = styled.a`
    position: absolute;
    color: #fff;
    font-size: 25px;
    right: 15px;
    top: 30%;
`;

function Service() {
    const [open, setOpen] = useState(false);
    const smallScreen =  window.screen.width <= 480 ? true : false

    return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video 
                    open={open} 
                    src={ExplanationVideo} 
                    autoPlay
                    loop
                    controls
                />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse debitis maxime placeat aspernatur fuga. Dignissimos libero quibusdam dolor debitis laboriosam maiores, molestias reprehenderit earum obcaecati ex id vero exercitationem. Delectus nemo totam rerum labore iure sequi reiciendis aspernatur minus quasi.</Description>
                </Wrapper>
                <CardContainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardContainer>
                <Button onClick={() => setOpen(true)}>
                    <FontAwesomeIcon icon={faPlay} />
                    how it works
                </Button>
            </Right>
            {smallScreen && open && (
                <Modal>
                    <Video 
                         open={open} 
                         src={ExplanationVideo} 
                         autoPlay
                         loop
                         controls
                    />
                    <CloseButton onClick={()=> setOpen(false)}>x</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
