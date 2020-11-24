import React from 'react';
import styled from 'styled-components';

const PatternedCardContaienr = styled.div`
    width: 100%;
    height: 174px;
    background-color:#2F52E0;
    border-radius:30px;
    display:flex;
    align-items:center;
    position:relative;
`

const PatternedCardTitle = styled.div`
    font-size:24px;
    font-weight:bold;
    max-width:200px;
    margin-left:35px;
    color:white;
`
const DateText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    color:#fff;
    position:absolute;
    right:20px;
    bottom:20px;
`
const PatternedCard = ({text,datetext,textcolor}) => {
    return <PatternedCardContaienr>
        <PatternedCardTitle>{text}</PatternedCardTitle>
        <DateText>{datetext}</DateText>
    </PatternedCardContaienr>
}

PatternedCard.defaultProps ={
    text:"Default text goes here",
    datetext:"Month 01, 2020",
}


export default PatternedCard;