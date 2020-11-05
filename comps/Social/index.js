import React from 'react';
import styled from 'styled-components'

const SocialBox = styled.div`
    width:80px;
    height:80px;
    border:5px solid #2F52E0;
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Facebook = styled.div`
    width:30%;
    display:flex;
    justify-content:center;
    align-items:center;

    img {
        width:100%;
        height:100%;
    }
`;



const Social = () =>{
   return <SocialBox>
       <Facebook><img src="facebook.png"/></Facebook>
       </SocialBox>
}

Social.defaultProps={

}

export default Social;