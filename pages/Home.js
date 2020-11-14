import React from 'react';
import TopPart from '../comps/TopPart';
import MemoryCard from '../comps/MemoryCard';
import HomeTrainingCard from '../comps/HomeTrainingCard';
import Subheading from '../comps/Subheading';
import Resource from '../comps/Resource';
import {useRouter} from 'next/router';


export default function Home() {
    const router = useRouter()

    return (
        <div className="Background">
            <div className="TopBar">
                <TopPart 
                TopHeight="258px"
                Pagename="HI, Emma!"
                DName="Humprey"
                Stat="wants to walk"
                />
            </div>
            <div className="TrainingSection" onClick={() => router.push('/Training')}>
                <Subheading text="Continue Training"/>
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
            </div>
            <div className="Recent-activity" 
            //onClick={() => router.push('/acievement')}
            >
                <Subheading text="Recent Activity"/>
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
                <Subheading text="Resources"/>
                <Resource breed={"Welsh Corgi"}/>
            </div>

        </div>
    );
      
  }