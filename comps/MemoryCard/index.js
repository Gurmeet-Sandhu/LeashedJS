import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    padding-right: 5px;
`;

const MemoryCardContainer = styled.div`
    width:135px;
    height:135px;
    border: 5px solid #F9CB40;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
`

const MemoryTitle = styled.div`
    font-size:18pt;
    margin:10px;
    flex:3;
`;

const MemoryDate = styled.div`
    font-size:10pt;
    color:#000;
    flex:1;
`;


const MemoryCard = ({text,date,border}) =>{
    return <Container>
        <MemoryCardContainer style={{border:border}}>
            <MemoryTitle>{text}</MemoryTitle>
            <MemoryDate>{date}</MemoryDate>
        </MemoryCardContainer>
    </Container>
}

MemoryCard.defaultProps = {
    text : "Default Memory Title",
    date : "yesterday",
    border : "5px solid #F9CB40;"
}

export default MemoryCard;