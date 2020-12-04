import React, { useState, useContext } from 'react';
import TopPart from '../comps/TopPart';
import Paragraphs from '../comps/Paragraphs';
import TipBox from '../comps/Tips';
import Button from '../comps/Button';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers'
import axios from 'axios'
import ReactPlayer from 'react-player'
import Button2 from '../comps/Button2';
import TipsButton from '../comps/ButtonTips';
import Quiz from '../comps/Quiz';
import { MyContext } from '../comps/context';

function TrainingInfo(props) {
    console.warn('quiz', props.quiz)
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    const context = useContext(MyContext);

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
                    Pagename={props.title}
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
                <div className="TipBtn">
                    <TipsButton onClick={() => {
                        context.setTipbox(!context.tipbox)
                    }} />
                </div>

                {/* <div className="Tips">
                    {props.data.tip}
                </div> */}
                <div className="TipBox">
                    <TipBox Header="Tip" Tiptext={props.data.tip} />
                </div>

                <div className="QuizBox">
                    <Quiz quiz={props.quiz} />
                </div>

                <div className="InfoBox">
                    <Paragraphs
                        content={props.data.desc}
                    />
                </div>
            </div>

            <div className="QuizButton">
                {(props.data.day_no == 7) && <Button2
                    text="Ready? Take the Quiz!"
                    bgColor="#FF715B"
                    onClick={() => {
                        context.setQuizbox(!context.quixbox)
                    }}
                />}
            </div>
            <div className="next-prev-button-position">
                {(props.day_index < (props.days.length - 1)) && <div className='Button' onClick={() => {
                    router.push({
                        pathname: '/TrainingInfo',
                        query: {
                            day_id: props.days[props.data.day_no],
                            days: props.days,
                            day_index: props.data.day_no,
                            quiz_id: props.quiz_id
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
                            day_index: props.data.day_no - 2,
                            quiz_id: props.quiz_id
                        }
                    })
                }}>
                    prev
                </div>}
            </div>


        </div>
    )
}

TrainingInfo.getInitialProps = async ({ req,res, query: { day_id, days, day_index, quiz_id, title } }) => {
    const data = parseCookies(req)
    console.log(quiz_id)

    if (!data.user) {
        if (res) {
            res.writeHead(301, { Location: "/Login" })
            res.end()
        }
        else {
            return { data: undefined }
        }

    }

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
        const quizData = await authAxios.get(`/user/quiz/${quiz_id}`)
        console.log(quizData.data)
        const result = {
            quiz: quizData.data,
            data: resp.data,
            days: days,
            day_index: day_index,
            quiz_id: quiz_id,
            title :title
        }
        return result

    } catch (error) {
        console.log(error.message)
    }

}

export default TrainingInfo