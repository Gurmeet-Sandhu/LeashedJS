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

const TrainingCardHomeTitle = styled.div`
    font-size:28px;
    color:white;
    font-weight:bold;
    max-width:160px;
    margin-left:22px;
    margin-bottom:10px;
`

const TrainingCardHomeDayText = styled.div`
    color:white;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-left:20px;
    min-width:50px;
`

const TrainingCardHomeYesterdayText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #F9CB40;
    margin-top:110px;
    margin-left:-60px;
`

const HomeTrainingCard = ({title, day, date}) =>{
    return <CardsContainer>
        <TrainingCardHome>
            <TrainingCardHomeBox >
                <TrainingCardHomeTitle>{title}</TrainingCardHomeTitle>
                <TrainingCardHomeDayText>{day}</TrainingCardHomeDayText>
                    <TrainingCardHomeYesterdayText>{date}</TrainingCardHomeYesterdayText>
            </TrainingCardHomeBox>
        </TrainingCardHome>
    </CardsContainer>
}
HomeTrainingCard.defaultProps ={
    title: "Default Title Goes Here",
    day: "Day #",
    date: "Defaultday",
}

export default HomeTrainingCard;