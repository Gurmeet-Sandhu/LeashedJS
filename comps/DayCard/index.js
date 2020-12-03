import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';

const DayContainer = styled.div`
    padding: 20px;
    width:100px;
    height:100px;
    border: 5px solid #F9CB40;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    background-color:${props => props.completed ? "#F9CB40" : "#fff"};
    opacity:${props => props.completed ? "80%" : "100%"};

`;



const Day = styled.div`
    display:flex;
    align-items:center;
    font-size:16pt;
    margin:10px;
    flex:4;
`;

const Complete = styled.div`
    font-size:10pt;
    color:#000;
    flex:1;
`;


const DayCard = ({ id, text, status, completed, days, day_index }) => {
    const router = useRouter()
    // const [complete, setComplete] = useState(true);
    return <DayContainer key={id} completed={completed} onClick={() => {
        router.push({
            pathname: '/TrainingInfo',
            query: {
                day_id: id,
                days: days,
                day_index: day_index
            }
        })
    }}>
        <Day>{text}</Day>
        <Complete>{status}</Complete>
    </DayContainer>
}

DayCard.defaultProps = {
    text: "Day N",
    date: "complete",
    bgColor: "#fff",
    completed: true
}

export default DayCard;