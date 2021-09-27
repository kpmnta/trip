import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    width: 100px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);

    &:hover {
        border-top: 2px solid #FF88CF;
        border-bottom: 2px solid #FF88CF;
        cursor: pointer;
    }

    @media only screen and (max-width: 480px) {
        width: 50px;
    }
`;

const Text = styled.span`
    margin-top: 10px;
    text-align: center;
`;


function MiniCard() {
    return (
        <Container>
            <FontAwesomeIcon icon={faSearch} />
            <Text>
                Lorem ipsum dolor sit amet elit. Fugiat voluptates. 
            </Text>
        </Container>
    )
}

export default MiniCard;
