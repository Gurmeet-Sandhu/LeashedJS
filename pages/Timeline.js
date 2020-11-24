import React from 'react';
import TopPart from '../comps/TopPart';
import Timeline from '../comps/Timeline';
import {useRouter} from 'next/router';

export default function Timelines() {
    const router = useRouter()
    return (
        <div className="timelineContainer">
            <div className="TopBar"> 
            <TopPart 
                onClick={()=>{
                    router.push('/Achievement')
                }}
                Pagename="Timeline"

                icon={"/arrow_b_l.png"}
                />
            </div>
            <div className="TimelineBox">
                <Timeline
                    Htext="Completed Lorem Ipsum"
                    Subtext="Yesterday"
                />
                <Timeline
                    Htext="Completed how to use treats."
                    Subtext="Oct 21, 2020"
                />
                <Timeline
                    Htext="Completed Pee & Poo Outside Day 2 "
                    Subtext="Oct 21, 2020"
                />
                <Timeline
                    Htext="Started Pee & Poo Outside Training."
                    Subtext="Oct 19, 2020"
                />
                <Timeline
                    Htext="Got Leashed."
                    Subtext="Oct 16, 2020"
                />
            </div>
        </div>
    )
  }