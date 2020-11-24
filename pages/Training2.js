import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import DayCard from '../comps/DayCard';
import FinalDayCard from '../comps/FinalDayCard';
import {useRouter} from 'next/router';

export default function Training2() {
    const router = useRouter()
    return (
      <div className="Background"> 
            <div className="TopBar"> 
            <TopPart 
                onClick={()=>{
                    router.push('/Training')
                }}
                TopHeight="200px"
                Pagename="Master The Dog Walk"
                Stat="You are on : Day 2"
                textSize="30px"
                bgColor="#2F52E0"
                color="#fff"

                icon={"/Back.png"}
                />
            </div>
            <div className="DaysSection"> 
                <div className="DayCards" onClick={() => router.push('/TrainingInfo')}> 
                    <DayCard 
                        text = "Day 1"
                        date = "complete"
                        completed = {true}           
                        />
                    <DayCard 
                        text = "Day 2"
                        date = "incomplete"
                        completed = {false}           
                        />
                </div>
                <div className="DayCards"> 
                    <DayCard 
                        text = "Day 3"
                        date = "incomplete"
                        completed = {false}                
                        />
                    <DayCard 
                        text = "Day 4"
                        date = "incomplete"
                        completed = {false}           
                        />         
                </div>
                <div className="DayCards"> 
                    <DayCard 
                        text = "Day 5"
                        date = "incomplete"
                        completed = {false}           
                        />
                    <DayCard 
                        text = "Day 6"
                        date = "incomplete"
                        completed = {false}           
                        />
                </div>
                <div className="FinalDay"> 
                    <FinalDayCard 
                        day="Day 7"
                        text=" Final Day!"
                        completeion="Incomplete"
                    />
                </div>
            </div>
      </div>
    )
  }