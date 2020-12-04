import React from 'react';
import styled from 'styled-components';

const DogBoxContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const DogName = styled.h3`
    display:inline-flex;
    font-size:30px;
    text-align:center;
    border-width:0px 0px 3px 0px;
    border-style:dotted;
    border-color:#FF715B
`;

const DogPhoto = styled.div`
    width:90%;
    img {
        border-radius:25px;
        width:100%;
        max-width:100%;
        height:auto;
        margin-bottom:30px;
    }
    
`;

const DogBox = ({dogname}) =>{
    return <DogBoxContainer>
            <DogName>{dogname}</DogName>
            <DogPhoto><img src="/corgi.png"/></DogPhoto>
            </DogBoxContainer>
}

DogBox.defaultProps = {
    dogname:'default'
}

export default DogBox; 