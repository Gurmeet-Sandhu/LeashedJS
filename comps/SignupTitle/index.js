import React from 'react';
import styled from 'styled-components';

const SignupContainer = styled.div`

`;

const SignupTitle = styled.div`
    font-size: 50px;
    color: #2F52E0;
`

const SignupSubtitle = styled.div`
    font-size: 20px;
`

const Signup = (title,subtitle) =>{
    return <SignupContainer>
        <SignupTitle>Welcome!</SignupTitle>
        <SignupSubtitle>Get the best from Leashed.</SignupSubtitle>
    </SignupContainer>
}

export default Signup;