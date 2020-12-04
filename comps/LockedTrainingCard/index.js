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
    
    @media screen and (max-height: 568px) {
        width:280px;
        height:140px;
     }
`
const TrainingCardTitle = styled.div`
    color:white;
    font-size:28px;
    font-weight:bold;
    min-width:180px;
    margin-right:110px;
    margin-bottom:30px;
    opacity:0.7;

    @media screen and (max-height: 568px) {
        font-size:22px;
        margin-left:20px;
     }
`

const Lock = styled.div`
   position:relative;
   left:50%;
   width:100px;

   img {
       width:100%;
       height:auto;
   }
   
`
const Arrow = styled.div`
    background:transparent;
    display:flex;
    position:relative;
    width:30px;
    margin-left:20px;

    img {
        width:100%;
        height:100%;
    }

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