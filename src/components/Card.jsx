import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
min-width:${({ type }) => type !== "sm" && "360px"};
margin-bottom:${({ type }) => type === "sm" ? "10px" : "45px"};
display:${({ type }) => type === "sm" && "flex"};
gap:10px;
`;

const Image = styled.img`
    width: 100%;;
    height: ${({ type }) => type === "sm" ? "120px" : "202px"};
    cursor:pointer;
    flex:1;
`
const Details = styled.div`
    display: flex;
    margin-top: ${({ type }) => type !== "sm" && "16px"};
    gap:12px;
    flex:1;
`
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius:50%;
    display:${({ type }) => type === "sm" && "none"};
`
const Texts = styled.div``;

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color:${({ theme }) => theme.text};
cursor:pointer;
`;

const ChannelName = styled.h2`
font-size: 14px;
color:${({ theme }) => theme.textSoft};
margin:9px 0px;
`;

const Info = styled.div`
font-size: 14px;
color:${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
    return (
        <Container type={type}>
            <Link to="/video/test">
                <Image type={type} src="https://img.youtube.com/vi/w3jLJU7DT5E/mqdefault.jpg" />
            </Link>
            <Details type={type}>
                <ChannelImage type={type} src="https://mkdev-rouge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_img.588d87b7.png&w=1920&q=75" />
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName>M.K.Dev</ChannelName>
                    <Info>123,456 views . 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}

export default Card