import React from 'react';
import TopPart from '../comps/TopPart';
import MemoryCard from '../comps/MemoryCard';
import FinalDayCard from '../comps/FinalDayCard';


export default function Training2() {
    return (
      <div className="Background"> 
            <div className="TopBar"> 
            <TopPart 
                TopHeight="258px"
                Pagename="Master The Dog Walk"
                Stat="You are on: Day 1"
                />
            </div>
            <div className="DaysSection"> 
                <div className="DayCards"> 
                    <MemoryCard 
                            text="Day 1"
                            border="5px solid #F9CB40"            
                            date="Incomplete"            
                        />
                    <MemoryCard 
                            text="Day 2"
                            border="5px solid #F9CB40"            
                            date="Incomplete"            
                        />
                </div>
                <div className="DayCards"> 
                    <MemoryCard 
                            text="Day 3"
                            border="5px solid #F9CB40"          
                            date="Incomplete"            
                        />
                    <MemoryCard 
                            text="Day 4"
                            border="5px solid #F9CB40"         
                            date="Incomplete"            
                        />
                </div>
                <div className="DayCards"> 
                    <MemoryCard 
                            text="Day 5"
                            border="5px solid #F9CB40"            
                            date="Incomplete"            
                        />
                    <MemoryCard 
                            text="Day 6"
                            border="5px solid #F9CB40"          
                            date="Incomplete"            
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