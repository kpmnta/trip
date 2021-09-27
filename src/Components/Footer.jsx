import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 10%;
    background-color: #FF88CF;
    color: #fff;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        padding: 8px;
    }
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

const ListItem = styled.li`
    margin-right: 20px;

    @media only screen and (max-width: 480px) {
        margin-right: 10px;
        font-size: 12px;
    }
`;

const Copyright = styled.span`
    
`;

function Footer() {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>About us</ListItem>
                    <ListItem>Book your trip</ListItem>
                    <ListItem>Contact</ListItem>
                    <ListItem>Careers</ListItem>
                </List>
                <Copyright>Kai Pimenta</Copyright>
            </Wrapper>
        </Container>
    )
}

export default Footer
