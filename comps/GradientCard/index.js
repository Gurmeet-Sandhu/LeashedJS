import React from 'react';
import styled from 'styled-components';

const GradientCardContainer = styled.div`
    width: 368px;
    height: 174px;
    background: linear-gradient(103.93deg, rgba(255, 113, 91, 0.63) 0%, rgba(249, 203, 64, 0.63) 98.7%, rgba(255, 255, 255, 0) 98.71%);
    border-radius: 30px;
    display:flex;
    align-items:center;
`

const GradientCardTitle = styled.div`
    font-size:24px;
    font-weight:bold;
    max-width:200px;
    margin-left:35px;
`
const DayText = styled.div`
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    text-align: right;
    margin-top:120px;
    margin-left:10px;
`

const GradientCard = ({text, daytext}) => {
    return <GradientCardContainer> 
        <GradientCardTitle>{text}</GradientCardTitle>
        <DayText>{daytext}</DayText>
    </GradientCardContainer>
}

GradientCard.defaultProps ={
    text:"Default text goes here",
    daytext:"Default Day"
}

export default GradientCard;