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

`

const TrainingCardTitle = styled.div`
    color:white;
    font-size:28px;
    margin-top:40px;
    margin-right:250px;
    max-width:20px;
    font-weight:bold;
`

const TrainingPageCard = () =>{
    return <TrainingCardContainer>
        <TrainingCard>
            <TrainingCardTitle>Training Title</TrainingCardTitle>
        </TrainingCard>
    </TrainingCardContainer>
}

TrainingPageCard.defaultProps = {
    title:"Training Title",
}

export default TrainingPageCard;