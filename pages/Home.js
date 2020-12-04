import React, { useState } from 'react';
import TopPart from '../comps/TopPart';
import MemoryCard from '../comps/MemoryCard';
import HomeTrainingCard from '../comps/HomeTrainingCard';
import Subheading from '../comps/Subheading';
import Resource from '../comps/Resource';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers'
import axios from 'axios'


function Home(props) {
    console.warn('data', props.data)
    const router = useRouter()
    const [expanded, setExpanded] = useState(false);
    if (props.data === undefined) {
        if (typeof window !== undefined) {
            router.push('/Login');
            return <></>
        }

    } else {
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
                        Pagename={"Hi " + props.data.user.first_name + " " + props.data.user.last_name}
                        DName={props.data.user.dogs[0].name}
                        Stat="wants to walk"
                    />
                </div>
                <div className="TrainingSection">
                    <Subheading text="Continue Training" />
                    <div className="TrainingCards">
                        {
                            props.data.training.levels.map((level,index) => {
                                // if((index+1) >= props.data.user.tracker.level)
                                // return (
                                //     <HomeTrainingCard key={level} id={level} token={props.token} tracker = {props.data.user.tracker} />
                                // )
                                return <HomeTrainingCard key={level} id={level} token={props.token} tracker = {props.data.user.tracker} />
                            })
                        }
                        {/* <HomeTrainingCard
                        title="Master The Dog Walk"
                        day="Day 5"
                        date="Yesterday"
                    />
                    <HomeTrainingCard
                        title="Master The Dog Walk"
                        day="Day 5"
                        date="Yesterday"
                    />
                    <HomeTrainingCard
                        title="Master The Dog Walk"
                        day="Day 5"
                        date="Yesterday"
                    />
                    <HomeTrainingCard
                        title="Master The Dog Walk"
                        day="Day 5"
                        date="Yesterday"
                    /> */}
                    </div>
                </div>
                <div className="Recent-activity"  >
                    <Subheading text="Recent Activity on this Level" />
                    <div className="ActivityCards">
                        {
                            props.data.level.days.map((day, index) => {
                                if ((index + 1) < props.data.user.tracker.day_no) {
                                    return (
                                        <MemoryCard
                                            id = {day}
                                            text={"Day " + (index + 1)}
                                            border="5px solid #2F52E0"
                                            date="Yesterday"
                                        />
                                    )
                                }
                            })

                        }

                        {/* <MemoryCard
                            text="Master The Dog Walk "
                            date="Yesterday"
                        />
                        <MemoryCard
                            text="Master The Dog Walk "
                            border="5px solid #2F52E0"
                            date="Yesterday"
                        />
                        <MemoryCard
                            text="Master The Dog Walk "
                            border="5px solid #FF715B"
                            date="Yesterday"
                        /> */}
                    </div>
                </div>
                <div className="Resourece-section" onClick={() => router.push('/Resources')}>
                    <Subheading text="Resources" />
                    <Resource breed={props.data.training.breed} />
                </div>

            </div>
        );
    }
}

Home.getInitialProps = async ({ req, res }) => {
    const data = parseCookies(req)

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
    console.log("initial props" + data.user)

    // const apiURL = "http://localhost:3003"
    const apiURL = "https://leashed-server.herokuapp.com"
    const authAxios = axios.create({
        baseURL: apiURL,
        headers: {
            Authorization: `${token}`
        }
    })
    try {
        const resp = await authAxios.get('/user/training')
        const result = {
            data: resp.data,
            token: token
        }
        return result

    } catch (error) {
        console.log(error.message)
    }

}

export default Home;