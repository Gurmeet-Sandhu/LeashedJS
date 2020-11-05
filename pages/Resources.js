import React from 'react';
import TopPart from '../comps/TopPart';
import ResourceSub from '../comps/ResourceSub';

export default function Resources() {
    return (
      <div className="ResourceContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Resources"
          />
        </div>
        <div className="ResourceSection">
          <ResourceSub 
            text="Adaptability"
            Border=""
          />
          <ResourceSub 
            text="Trainability"
            Border="5px solid #FF715B"
          />
          <ResourceSub 
            text="Personality"
            Border="5px solid #F9CB40"
          />
          <ResourceSub 
            text="Physical Needs"
          />
          <ResourceSub 
            text="Health And Grooming"
            Border="5px solid #FF715B"
          />
        </div>
      </div>
    )
  }