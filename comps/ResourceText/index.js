import React from 'react';
import styled from 'styled-components';

const ResourceTextBox = styled.div`
    max-width: fit-content;
    margin: 10%;
    padding:10px;
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:##1c2222;
    font-family: 'Poppins', Sans-serif;
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