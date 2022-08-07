import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
display: flex;
gap:10px;
margin:30px 0;
`;
const Avatar = styled.img`
width: 50px;
    height: 50px;
    border-radius:50%;
`;
const Details = styled.div`
display: flex;
flex-direction: column;
gap:10px;
color:${({ theme }) => theme.text};
`;
const Name = styled.span`
font-size: 13px;
font-weight: 500;
`;
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color:${({ theme }) => theme.textSoft};
margin-left: 5px;
`;
const Text = styled.span`
font-size: 14px;`;
const Comment = () => {
    return (
        <Container>
            <Avatar src="https://mkdev-rouge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_img.588d87b7.png&w=1920&q=75" />
            <Details>
                <Name>M.K.Dev <Date>01 Aug 2022</Date></Name>
                <Text>Test Comments</Text>
            </Details>
        </Container>
    )
}

export default Comment