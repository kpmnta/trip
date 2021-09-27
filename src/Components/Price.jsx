import React from 'react';
import styled from 'styled-components';
import PriceCard from './PriceCard';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
    }
`;

function Price() {
    return (
        <Container>
            <PriceCard price="10" type="Basic"/>
            <PriceCard price="27" type="Standart"/>
            <PriceCard price="35" type="Premium" />
        </Container>
    )
}

export default Price
