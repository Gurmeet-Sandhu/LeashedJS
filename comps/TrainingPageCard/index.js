import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'

const TrainingCard = styled.div`
    margin:10px;
    width: 338px;
    height: 164px;
    background: #2F52E0;
    box-shadow: 2px 4px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    max-width:400px;
    position:relative;

    @media screen and (max-height: 568px) {
        width:280px;
        height:140px;
`

const TrainingCardTitle = styled.div`
    color:#fff;
    font-size:28px;
    font-weight:bold;
    max-width:190px;
    @media screen and (max-height: 568px) {
        font-size:22px;
        margin-left:20px;
     }
`

const Arrow = styled.div`
    background:transparent;
    display:flex;
    width:30px;
    img {
        width:100%;
        height:100%;
    }
    @media screen and (max-height: 568px) {
        width:30px;
        margin-right:10px;
     }
`;

const LockedCon = styled.div`
     width:100%;
     height:100%;
     position:absolute;
     z-index:50;
     background-color:#000;
     opacity:${props => props.locked ? "0.5" : "0"};
     top:0;
     left:0;
     border-radius: 30px;
     display:flex;
     justify-content:center;
     align-items: center;
`;

const Lock = styled.div`
    position:absolute;
    z-index:99;
    opacity:${props => props.locked ? "1": "0"};
   img {
       width:100%;
       height:auto;
   }
   
`

const TrainingPageCard = ({ id, token, day_no, lock}) => {
    const router = useRouter()
    const [info, setInfo] = useState({ title: "", duration: 0, days: [], quiz: "", day_no: day_no });
    useEffect(() => {

        const apiURL = "https://leashed-server.herokuapp.com"
        const authAxios = axios.create({
            baseURL: apiURL,
            headers: {
                Authorization: `${token}`
            }
        })

        authAxios.get(`/user/level/${id}`)
            .then(resp => {
                setInfo({ ...info, title: resp.data.title, duration: resp.data.duration, days: resp.data.days, quiz: resp.data.quiz })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return <TrainingCard key={id} onClick={() => router.push({
        pathname: '/Training2',
        query: {
            pid: id,
            title: info.title,
            duration: info.duration,
            days: info.days,
            quiz: info.quiz,
            day_no: info.day_no
        }
    })}>
        <TrainingCardTitle>{info.title}</TrainingCardTitle>
        <Arrow><img src="TrainingArrow.png"></img></Arrow>
        <LockedCon locked={lock}/>
        <Lock locked={lock}><img src="lock.png"></img></Lock>
    </TrainingCard>
}

TrainingPageCard.defaultProps = {
    title: "Default Title Goes Here",
}

export default TrainingPageCard;