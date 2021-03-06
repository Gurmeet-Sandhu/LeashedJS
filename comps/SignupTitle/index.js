import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`

`;

const SignupTitle = styled.div`
    font-weight: bold;
    font-size: 50px;
    color: #2F52E0;
`

const SignupSubtitle = styled.div`
    font-size: 20px;
`

const Signup = ({title,subtitle}) =>{
    return <SignupContainer>
        <SignupTitle>{title}</SignupTitle>
        <SignupSubtitle>{subtitle}</SignupSubtitle>
    </SignupContainer>
}

Signup.defaultProps ={
    title:"Title",
    subtitle:"Subtitle goes here",
}

export default Signup;