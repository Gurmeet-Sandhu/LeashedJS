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
                {(props.data.day_no == 7) && <Button
                    text="Ready? Take the Quiz!"
                    bgColor="#FF715B"
                />}
            </div>
            <div className="next-prev-button-position">
                {(props.day_index < (props.days.length - 1)) && <div className='Button' onClick={() => {
                    router.push({
                        pathname: '/TrainingInfo',
                        query: {
                            day_id: props.days[props.data.day_no],
                            days: props.days,
                            day_index: props.data.day_no
                        }
                    })
                }}>
                    next
                </div>}
            </div>
            <div className="next-prev-button-position">
                {(props.day_index > 0) && <div className='Button' onClick={() => {
                    router.push({
                        pathname: '/TrainingInfo',
                        query: {
                            day_id: props.days[props.data.day_no - 2],
                            days: props.days,
                            day_index: props.data.day_no - 2
                        }
                    })
                }}>
                    prev
                </div>}
            </div>


        </div>
    )
}

TrainingInfo.getInitialProps = async ({ req, query: { day_id, days, day_index } }) => {
    const data = parseCookies(req)

    const token = JSON.parse(data.user)

    const apiURL = "https://leashed-server.herokuapp.com"
    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `${token}`
        }
    })
    try {
        const resp = await authAxios.get(`/user/day/${day_id}`)
        const result = {
            data: resp.data,
            days: days,
            day_index: day_index
        }
        return result

    } catch (error) {
        console.log(error.message)
    }

}

export default TrainingInfo