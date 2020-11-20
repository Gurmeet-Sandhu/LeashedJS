import React from 'react';
import styled from 'styled-components';

const ResourceTextBox = styled.div`
    width:90%;
    height:auto;
    margin: 20px;
    padding:14px;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:RGBA(27,33,33,0.04);
    font-family: 'Poppins', Sans-serif;
    text-align: justify;
    span {
        font-size:14px;
        weight:regular;
    }
`



const ResourceText = ({text}) =>{
    return  <ResourceTextBox>
        <div>{text}</div>
    </ResourceTextBox>
}

ResourceText.defaultProps = {
    text:"default description"
}

export default ResourceText;