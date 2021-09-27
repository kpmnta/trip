import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    padding: 20px;
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    border-radius: 20px;

    @media only screen and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 10px;
        padding: 10px;
    }
`;

const PriceContainer = styled.div `
    display: flex;
    align-items: center;
`;

const Price = styled.span `
    font-family: 'Passion One', sans-serif;
    font-size: 75px;
    @media only screen and (max-width: 480px) {
        font-size: 30px;
    }
`;

const Type = styled.button `
    padding: 10px;
    margin: 10px 0;
    border: 2px solid #FF88CF;
    color:#FF88CF;
    background-color: #fff;
    border-radius: 20px;
    font-weight: bold;
`;
const List = styled.ul `
    list-style: none;
`;
const ListItem = styled.li `
    margin: 20px 0;

    @media only screen and (max-width: 480px) {
        margin: 10px;
        font-size: 11px;
    }
`;
const Button = styled.button `
    width: 150px;
    border: none;
    padding: 10px 20px;
    background-color: #FF88CF;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    margin-top: 20px;

    @media only screen and (max-width: 480px) {
        margin-top: 0;
    }
`;
function PriceCard({price, type}) {
    return (
        <Container>
            <PriceContainer>
                $<Price>{ price }</Price>/month
            </PriceContainer>
                <Type>{ type } Plan</Type>
                <List>
                    <ListItem>Lorem ipsum dolor sit.</ListItem>
                    <ListItem>Adipisicing elit. Non, vitae.</ListItem>
                    <ListItem>Quod, sint fugiat dolorem magnam.</ListItem>
                    <ListItem>Amet consectetur adipisicing elit. Velit, impedit.</ListItem>{' '}
                </List>
                <Button>join now</Button>
        </Container>
    )
}

export default PriceCard;
