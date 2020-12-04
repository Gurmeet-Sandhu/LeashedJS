import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import TrainingPageCard from '../comps/TrainingPageCard';
import {useRouter} from 'next/router';


export default function Training() {
  const [lock, setLock] = useState(true);
  const router = useRouter();
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
        <div className="Training_Cards">
          <div className="training_card" onClick={() => router.push('/Training2')}>
            <TrainingPageCard 
            title="Master the Dog Walk"

            />
          </div>
          <div className="training_card" onClick={() => router.push('/Training2')}>
            <TrainingPageCard 
            lock={lock}
            title="Potty Training"

            />
          </div>
          <div className="training_card" onClick={() => router.push('/Training2')}>
            <TrainingPageCard 
            lock={lock}
            title="Basic Dog Commands"

            />
          </div>
          <div className="training_card" onClick={() => router.push('/Training2')}>
            <TrainingPageCard 
            lock={lock}
            title="Socialization"

            />
          </div>
        </div>
      </div>

    )
  }