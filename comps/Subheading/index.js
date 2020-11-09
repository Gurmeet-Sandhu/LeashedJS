import React from 'react';
import styled from 'styled-components';

const SHContainer = styled.div`
    padding-left:20px;
    padding-top:20px;
    padding-bottom:20px;
    width:100%;
    height:auto;
    font-weight:700;
    font-size:22px;
    display:flex;
    align-text:left;

    span {
        display:inline-flex;
    }
`;



const Subheading= ({text}) =>{
    return <SHContainer>
        <span>{text}</span>
    </SHContainer>
}

Subheading.defaultProps = {
    text : "Default Subheading",
}

export default Subheading;