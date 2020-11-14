import React from 'react';
import styled from 'styled-components';

const TrainingCardCont = styled.div`
    margin:10px;
    width: 338px;
    height: 164px;
    background: #172667;
    box-shadow: 2px 4px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    display:flex;
    justify-content:center;
    align-items:center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const TrainingCardTitle = styled.div`
    color:white;
    font-size:28px;
    font-weight:bold;
    min-width:180px;
    margin-right:110px;
    margin-bottom:30px;
    opacity:0.7;
`

const Lock = styled.div`
   position:relative;
   left:50%;
   
`
const Arrow = styled.div`
    background:transparent;
    display:flex;
    position:relative;
    right: 19%;

`

const LockedTrainingCard = ({title}) =>{
    return <div>
        <TrainingCardCont>
        <Lock><img src="lock.png"></img></Lock>
        <TrainingCardTitle>{title}</TrainingCardTitle>
        <Arrow><img src="TrainingArrow.png"></img></Arrow>
    </TrainingCardCont>
    </div>
}

LockedTrainingCard.defaultProps = {
    title:"Default Title Goes Here",
}

export default LockedTrainingCard;