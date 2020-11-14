import React , {useState} from 'react';
import TopPart from '../comps/TopPart';
import ResourceSub from '../comps/ResourceSub';
import {useRouter} from 'next/router';

export default function Resources() {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
    return (
      <div className="ResourceContainer">
        <div className="TopBar">
          <TopPart 
           Pagename ="Resources"
           openMenu={expanded}
                onClick={()=>{
                    setExpanded(!expanded)
                }}
                onReturn={()=>{
                    setExpanded(!expanded)
                }}
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