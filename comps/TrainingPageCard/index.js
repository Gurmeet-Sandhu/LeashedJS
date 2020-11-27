import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Training from '../../pages/Training';
import axios from 'axios'

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
const TrainingPageCard = ({ id, token }) => {
    const router = useRouter()
    const [info, setInfo] = useState({ title: "", duration: 0, days: [], quiz: "" });
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
            quiz: info.quiz
        }
    })}>
        <TrainingCardTitle>{info.title}</TrainingCardTitle>
        <Arrow><img src="TrainingArrow.png"></img></Arrow>
    </TrainingCard>
}

TrainingPageCard.defaultProps = {
    title: "Default Title Goes Here",
}

export default TrainingPageCard;