import React from 'react';
import styled from 'styled-components';

const CardsContainer =styled.div`

`

const LoginCard = styled.div`
    width: 362px;
    height: 547.49px;
    border: solid 1px black;
    border-radius: 40px;
`

const SignupAndProfileCard =styled.div`
    width: 362px;
    height: 505px;
    border: solid 1px black;
    border-radius: 40px;
`

const TrainingCardHome = styled.div `
    width: 274px;
    height: 164px;
    background: #2F52E0;
    border-radius: 30px;
`

const TrainingCardBig = styled.div`
    width: 338px;
    height: 164px;
    background: #2F52E0;
    border-radius: 30px;
`

const AcheivementCardPattern = styled.div`
    width: 467px;
    height: 221px;
    border-radius: 30px;
    background: #2F52E0;

`

const AcheivmentCardGradient = styled.div`
    width: 368px;
    height: 174px;
    background: linear-gradient(103.93deg, rgba(255, 113, 91, 0.63) 0%, rgba(249, 203, 64, 0.63) 98.7%, rgba(255, 255, 255, 0) 98.71%);
    border-radius: 30px;
    background: #2F52E0;

`

const DayCards = styled.div`
    width: 135px;
    height: 135px;
    background:#FFFFFF;
    border-radius: 20px;
    border: solid 5px #F9CB40;
`
const FinalDayCard = styled.div`
    border-radius: 20px;
    border: solid 5px #FF715B;
    width: 291px;
    height: 135px;
`

const Cards = () =>{
    return <CardsContainer>
        <LoginCard></LoginCard>
        <br></br>
        <SignupAndProfileCard></SignupAndProfileCard>
        <br></br>
        <TrainingCardHome></TrainingCardHome>
        <br></br>
        <TrainingCardBig></TrainingCardBig>
        <br></br>
        <AcheivmentCardGradient></AcheivmentCardGradient>
        <br></br>
        <AcheivementCardPattern></AcheivementCardPattern>
        <br></br>
        <DayCards></DayCards>
        <br></br>
        <FinalDayCard></FinalDayCard>
    </CardsContainer>
}

export default Cards;