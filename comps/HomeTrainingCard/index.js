import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useRouter } from 'next/router'


const CardsContainer = styled.div`
    padding: 20px;
`

const TrainingCardHome = styled.div`
    
`

const TrainingCardHomeBox = styled.div`
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
    margin-left:15px;
    min-width:50px;
`

const TrainingCardHomeYesterdayText = styled.div`
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: #F9CB40;
    margin-top:110px;
    margin-left:-70px;
`

const HomeTrainingCard = ({ id, token }) => {

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
    return <CardsContainer>
        <TrainingCardHome>
            <TrainingCardHomeBox key={id} onClick={() => router.push({
                pathname: '/Training2',
                query: {
                    pid: id,
                    title: info.title,
                    duration: info.duration,
                    days: info.days,
                    quiz: info.quiz
                }
            })}>
                <TrainingCardHomeTitle>{info.title}</TrainingCardHomeTitle>
                <TrainingCardHomeDayText>{info.duration + " Days"}</TrainingCardHomeDayText>
                <TrainingCardHomeYesterdayText></TrainingCardHomeYesterdayText>
            </TrainingCardHomeBox>
        </TrainingCardHome>
    </CardsContainer>
}
HomeTrainingCard.defaultProps = {
    title: "Default Title Goes Here",
    day: "Day #",
    date: "Defaultday",
}

export default HomeTrainingCard;