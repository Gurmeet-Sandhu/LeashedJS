import React from 'react';
import styled from 'styled-components';

const TrainingCardContainer = styled.div`

`

const TrainingCard = styled.div`
    width: 338px;
    height: 164px;
    background: #2F52E0;
    box-shadow: 2px 4px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
`

const TrainingCardTitle = styled.div`
    color:white;
    font-size:28px;
    font-weight:bold;
    max-width:190px;
    margin-right:100px;
    margin-bottom:30px;
`

const TrainingArrow = styled.div`
    background-image: url("TrainingArrow.png")

`
const TrainingPageCard = ({title}) =>{
    return <TrainingCardContainer>
        <TrainingCard>
            <TrainingCardTitle>{title}</TrainingCardTitle>
        </TrainingCard>
    </TrainingCardContainer>
}

TrainingPageCard.defaultProps = {
    title:"Deafult Title Goes Here",
}

export default TrainingPageCard;