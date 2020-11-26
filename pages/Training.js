import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import TrainingPageCard from '../comps/TrainingPageCard';
import LockedTrainingCard from '../comps/LockedTrainingCard';
import {useRouter} from 'next/router';

export default function Training() {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
    return (
      <div className="TrainingContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Training"
           openMenu={expanded}
                onClick={()=>{
                    setExpanded(!expanded)
                }}
                onReturn={()=>{
                    setExpanded(!expanded)
                }}
          />
        </div>
        <div className="TrainingCard">
          <div className="training_card" onClick={() => router.push('/Training2')}>
            <TrainingPageCard 
            title="Master the Dog Walk"
            />
          </div>
          <div className="training_card">
            <LockedTrainingCard 
            title="Potty Training"
            />
          </div>
          <div className="training_card">
            <LockedTrainingCard 
            title="Basic Dog Commands"
            />
          </div>
            <div className="training_card">
            <LockedTrainingCard 
            title="Socialization"
            />
          </div>
        </div>
      </div>

    )
  }