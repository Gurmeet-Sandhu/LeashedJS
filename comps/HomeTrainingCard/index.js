import React from 'react';
import styled from 'styled-components';

const CardsContainer =styled.div`

`

const TrainingCardHome = styled.div`
    
`

const TrainingCardHomeBox = styled.div `
    width: 274px;
    height: 164px;
    background: #2F52E0;
    border-radius: 30px;
    display:flex;
    align-items:center;
`

const TrainingCardHomeText = styled.div`
    font-size:28px;
    color:white;
    font-weight:bold;
    max-width:150px;
    margin-left:25px;
    margin-bottom:20px;
`

const TrainingCardHomeDayText = styled.div`
    font-size:20px;
    color:white;
    margin-left:15px;
`

const TrainingCardHomeYesterdayText = styled.div`
    font-size:14px;
    color: #F9CB40; 
    line-height:200px;
`

const TrainingCardHomeYesterdayTextBox = styled.div`

`

const HomeTrainingCard = () =>{
    return <CardsContainer>
        <TrainingCardHome>
            <TrainingCardHomeBox >
                <TrainingCardHomeText>Master the Dog Walk</TrainingCardHomeText>
                <TrainingCardHomeDayText >DAY 5 </TrainingCardHomeDayText>
            </TrainingCardHomeBox>
        </TrainingCardHome>
    </CardsContainer>
}

export default HomeTrainingCard;