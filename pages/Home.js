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
                    Pagename={"Hi " + props.data.name}
                    DName={props.data.dog_name}
                    Stat="wants to walk"
                />
            </div>
            <div className="TrainingSection">
                <Subheading text="Continue Training" />
                <div className="TrainingCards">
                    {
                        props.data.levels.map(level => {
                            return (
                                <HomeTrainingCard key={level} id={level} token={props.token} />
                            )
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
                <Subheading text="Recent Activity" />
                <div className="ActivityCards">
                    <MemoryCard
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
                    />
                </div>
            </div>
            <div className="Resourece-section" onClick={() => router.push('/Resources')}>
                <Subheading text="Resources" />
                <Resource breed={"Welsh Corgi"} />
            </div>

        </div>
    ); 

}

Home.getInitialProps = async ({ req, res }) => {
    const data = parseCookies(req)
    

    // if (res) {
    //     if (Object.keys(data).length === 0 && data.constructor === Object) {
    //         res.writeHead(301, { Location: "/Login" })
    //         res.end()
    //     }
    // }

    const token = JSON.parse(data.user)
    console.log("initial props" + data.user)

    const apiURL = "http://localhost:3003"
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

// export async function getServerSideProps(context) {
//     // Fetch data from external API
//     const res = await authAxios.get('/user/training')

//     // Pass data to the page via props
//     return { props: { res }}
// }

export default Home;