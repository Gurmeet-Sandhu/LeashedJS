import React from 'react';
import styled from 'styled-components';

const GradientCardContainer = styled.div`
    width: 100%;
    height: 174px;
    background: linear-gradient(103.93deg, rgba(255, 113, 91, 0.63) 0%, rgba(249, 203, 64, 0.63) 98.7%, rgba(255, 255, 255, 0) 98.71%);
    border-radius: 30px;
    display:flex;
    align-items:center;
    position:relative;
`

const GradientCardTitle = styled.div`
    font-size:24px;
    font-weight:bold;
    max-width:200px;
    margin-left:35px;
    color:#1B2121
`
const DayText = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    color:#1B2121;
    position:absolute;
    right:20px;
    bottom:20px;    
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