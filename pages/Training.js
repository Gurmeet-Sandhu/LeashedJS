import React from 'react';
import TopPart from '../comps/TopPart';
import TrainingPageCard from '../comps/TrainingPageCard';

export default function Training() {
    return (
      <div className="TrainingContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Training"
          />
        </div>
        <div className="TrainingCard">
          <TrainingPageCard 
          title="Master the Dog Walk"
          />
          <TrainingPageCard 
          title="Pee & Poo"
          />
          <TrainingPageCard 
          title="Basic Dog Commands"
          />
          <TrainingPageCard 
          title="Socialization"
          />
        </div>
      </div>

    )
  }