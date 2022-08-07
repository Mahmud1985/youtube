import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import React from 'react'
import styled from 'styled-components';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
display:flex;
gap:24px;
`;

const Content = styled.div`
flex:5;
`;

const VideoWrapper = styled.div`

`;

const Title = styled.h1`
    font-size:18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom:10px;
    color: ${({ theme }) => theme.text};
`;

const Detailes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled.span`
    color:${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
gap:20px;
color:${({ theme }) => theme.text};

`;
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:5px;
cursor:pointer;
`;

const Hr = styled.hr`
margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
`;
const Image = styled.img`
width: 50px;
    height: 50px;
    border-radius:50%;
`;
const ChannelDetail = styled.div`
display: flex;
flex-direction:column;
color:${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top: 5px;
margin-bottom: 20px;
color:${({ theme }) => theme.textSoft};
font-size: 12px;
`;
const Description = styled.p`
font-size: 14px;
`;
const Subscribe = styled.button`
background-color:#cc1a00;
font-weight: 500;
color:white;
border:none;
border-radius:3px;
height:max-content;
padding: 10px 20px;
cursor:pointer;
`;

const Recommendation = styled.div`
flex:2;
`;
const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe width="100%" height="720" src='https://www.youtube.com/embed/k3Vfj-e1Ma4' title="Youtube Video Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gryroscope; picture-in-picture" allowFullScreen ></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Detailes>
                    <Info> 123,456 views . Aus 06 2022</Info>
                    <Buttons>
                        <Button><ThumbUpOutlinedIcon />123</Button>
                        <Button><ThumbDownOffAltOutlinedIcon />Dislike</Button>
                        <Button><ReplyOutlinedIcon />Share</Button>
                        <Button><AddTaskOutlinedIcon />Save</Button>
                    </Buttons>
                </Detailes>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src='https://mkdev-rouge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_img.588d87b7.png&w=1920&q=75' />
                        <ChannelDetail>
                            <ChannelName>M.K.Dev</ChannelName>
                            <ChannelCounter>200K Subscribers</ChannelCounter>
                            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vel voluptatum tenetur earum dolorem, impedit deserunt doloribus voluptates ut velit id laboriosam animi porro sed?</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>Subscribe</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video