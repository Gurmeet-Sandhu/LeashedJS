import React from 'react';
import TopPart from '../comps/TopPart';
import MemoryCard from '../comps/MemoryCard';
import HomeTrainingCard from '../comps/HomeTrainingCard';

export default function Home() {
    return (
        <div className="Background">
            <div className="TopBar">
                <TopPart 
                TopHeight="300px"
                Pagename="HI, Emma!"
                DName="Humprey"
                Stat="wants to walk"
                />
            </div>
            <div className="TrainingSection">
                <div className="Subtitles"><h3>Continue Training</h3></div>
                <div className="TrainingCards">
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
                    />
                    <HomeTrainingCard 
                        title="Master The Dog Walk"
                        day="Day 5"
                        date="Yesterday"
                    />
                </div>
                <div className="Subtitles"><h3>Recent Activity</h3></div>
                <div className="TrainingCards">
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
        </div>
    );
      
  }