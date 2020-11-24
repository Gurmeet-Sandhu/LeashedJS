import React from 'react';
import styled from 'styled-components';


const MemoryCardContainer = styled.div`
    padding: 18px;
    width:100px;
    min-width:100px;
    height:100px;
    border: 5px solid #F9CB40;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    margin:0 10px;

`

const MemoryTitle = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    font-size:14pt;
    margin:5px;
    flex:3;
`;

const MemoryDate = styled.div`
    font-size:10pt;
    color:#000;
    flex:1;
`;


const MemoryCard = ({text,date,border}) =>{
    return <MemoryCardContainer style={{border:border}}>
            <MemoryTitle>{text}</MemoryTitle>
            <MemoryDate>{date}</MemoryDate>
        </MemoryCardContainer>
}

MemoryCard.defaultProps = {
    text : "Default Memory Title",
    date : "yesterday",
    border : "5px solid #F9CB40;"
}

export default MemoryCard;