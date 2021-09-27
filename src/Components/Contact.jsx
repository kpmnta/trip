import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faInbox } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    height: 90%;
    max-width: 1360px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width: 480px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    margin-left: 90px;
    padding-bottom: 30px;
    font-family: 'Passion One', sans-serif;
    font-size: 50px;
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 480px) {
       height: 50%;
       margin-right: 0;
    }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        height: 50%;
    }
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;
    outline: none;
    @media only screen and (max-width: 480px) {
        padding: 5px;
    }
`;

const Textarea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        padding: 5px;
    }
`;

const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #FF88CF;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    margin-top: 20px;
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        padding: 15px;
    }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    @media only screen and (max-width: 480px) {
        justify-content: center;
    }
`;

const Text = styled.span`
    font-size: 20px;
    padding: 0 10px;
`;


function Contact() {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions?</Title>
                    <Form>
                        <LeftForm>
                            <Input placeholder="your name" />
                            <Input placeholder="your best email" />
                            <Input placeholder="subject" />
                        </LeftForm>
                        <RightForm>
                            <Textarea placeholder="your message" />
                            <Button>send</Button>
                        </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <FontAwesomeIcon icon={ faMap } />
                        <Text>Av. Paulista 123, São Paulo - SP</Text>
                    </AddressItem>
                    <AddressItem>
                        <FontAwesomeIcon icon={ faPhone } />
                        <Text>(11) 99999 - 9999</Text>
                    </AddressItem>
                    <AddressItem>
                        <FontAwesomeIcon icon={ faInbox } />
                        <Text>email@email.com</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper> 
        </Container>
    )
}

export default Contact
