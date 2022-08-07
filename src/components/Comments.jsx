
import React from 'react'
import styled from 'styled-components';
import Comment from './Comment';

const Container = styled.div``

const NewComment = styled.div`
display: flex;
align-items: center;
gap:10px;
`;

const Avatar = styled.img`
width: 50px;
    height: 50px;
    border-radius:50%;
`;

const Input = styled.input`
width:60%;
border:none;
border-bottom: 1px solid ${({ theme }) => theme.soft};
outline: none;
color: ${({ theme }) => theme.text};
background-color: transparent;
padding: 5px;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://mkdev-rouge.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain_img.588d87b7.png&w=1920&q=75" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments