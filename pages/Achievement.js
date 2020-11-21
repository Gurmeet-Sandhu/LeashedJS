import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import GradientCard from'../comps/GradientCard';
import PatternedCard from '../comps/PatternedCard';
import Seemore from '../comps/Seemore';
import MemoryCard from '../comps/MemoryCard';
import SubHeading from'../comps/Subheading';
import {useRouter} from 'next/router';

export default function Achievement() {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
    return (
    <div className="Background">
      <div className="TrainingContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Achievements"
           openMenu={expanded}
                onClick={()=>{
                    setExpanded(!expanded)
                }}
                onReturn={()=>{
                    setExpanded(!expanded)
                }}
          />
        </div>
        <div className="AchievementBox">
                <div className="TopCards">
                    <PatternedCard 
                        text="Compeleted How to Use Treats"
                        datetext="April 20, 2020"
                    />
                </div>

                <div className="TopCards">
                    <GradientCard 
                            text="Compeleted How to Use Treats"
                            daytext="Yesterday"
                        />
                </div>

                <div className="SeeMoreBox">
                    <Seemore
                    />
                </div>
                
                <div className="MemoriesBox">
                    <SubHeading 
                        text="Memories"
                    />
                    <div className="InnerMemories">
                    <MemoryCard 
                        text="First Walk with Humphrey"
                        date="3 days ago"
                        border="5px solid #F9CB40"
                    />
                    <MemoryCard 
                        text="Visited Vet for second time"
                        date="April 20, 2020"
                        border="5px solid #2F52E0"
                    />
                    <MemoryCard 
                        text="Visited Dog Park in Surrey"
                        date="March 03"
                        border="5px solid #FF715B"
                    />
                    </div>
                </div>
        </div>
      </div>
</div>
    )
  }