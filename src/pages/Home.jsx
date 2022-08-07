import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap:wrap;
gap:10px;

@media screen and (max-width:810px){
 justify-content:center;   
}
`;
const Home = () => {
    return (
        <Container>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}

export default Home