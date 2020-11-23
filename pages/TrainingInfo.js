import React, { useState } from 'react';
import TopPart from '../comps/TopPart';
import Paragraphs from '../comps/Paragraphs';
import TipBox from '../comps/Tips';
import Button from '../comps/Button';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers'
import axios from 'axios'
import ReactPlayer from 'react-player'

function TrainingInfo(props) {
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="Background">
            <div className="TopBar">
                <TopPart
                    openMenu={expanded}
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                    onReturn={() => {
                        setExpanded(!expanded)
                    }}
                    TopHeight="258px"
                    Pagename="Master The Dog Walk"
                    Stat={"Day " + props.data.day_no}
                    // icon={"/arrow_b_l.png"}
                    // onClick={() => {
                    //     router.push('/Training2')
                    // }}
                />
            </div>
            <div className="InfoSection">
                <div className="VideoSection">
                    <ReactPlayer url="https://www.youtube.com/watch?v=6pTKZSe0tkI" />
                </div>
                <div className="Tips">
                    {props.data.tip}
                </div>
                <div className="InfoBox">
                    <Paragraphs
                        content={props.data.desc}
                    />
                </div>
            </div>
            <div className="QuizButton">
                <Button
                    text="Ready? Take the Quiz!"
                    bgColor="#FF715B"
                />
            </div>

        </div>
    )
}

TrainingInfo.getInitialProps = async ({ req, query: { day_id } }) => {
    const data = parseCookies(req)

    const token = JSON.parse(data.user)

    const apiURL = "http://localhost:3003"
    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `${token}`
        }
    })
    try {
        const resp = await authAxios.get(`/user/day/${day_id}`)
        const result = {
            data: resp.data
        }
        return result

    } catch (error) {
        console.log(error.message)
    }

}

export default TrainingInfo