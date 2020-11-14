import React from 'react';
import styled from 'styled-components';
import Training from '../../pages/Training';


const TrainingCard = styled.div`
    margin:10px;
    width: 338px;
    height: 164px;
    background: #2F52E0;
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
    max-width:190px;
    margin-right:70px;
    margin-bottom:30px;
`

const Arrow = styled.div`
    background:transparent;
    display:flex;
    margin-left: -10%;
`
const TrainingPageCard = ({title}) =>{
    return <TrainingCard>
            <TrainingCardTitle>{title}</TrainingCardTitle>
            <Arrow><img src="TrainingArrow.png"></img></Arrow>
        </TrainingCard>
}

TrainingPageCard.defaultProps = {
    title:"Default Title Goes Here",
}

export default TrainingPageCard;