import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    height: 50px;
    max-width: 1360px;
    margin: 0 auto;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    font-weight: bold;
    `;

const Menu = styled.ul`
    display: flex;
    gap: 12px;
    list-style: none;

    @media only screen and (max-width: 480px) {
        display: none;
    }
`;

const MenuItem = styled.li`
    font-size: 20px;
    color: #FF88CF;
    font-family: 'Passion One', sans-serif;
`;

const Button = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #FF88CF;
    cursor: pointer;
    color: white;
    border-radius: 10px;
`;

const Navbar = () => {

    return ( 
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Kai Pimenta</Logo>
                    <Menu>
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Menu>
                
                </Left>
                <Button>join now</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar;