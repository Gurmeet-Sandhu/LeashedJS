import React , {useState} from 'react';
import TopPart from '../comps/TopPart';
import ResourceSub from '../comps/ResourceSub';
import ResourceText from '../comps/ResourceText';
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

              <div className="ResourcePart Adaptability">
                <ResourceSub 
                  text="Adaptability"
                  Border=""
                />
                <ResourceText text={"Adaptability"}/>
              </div>

              <div className="ResourcePart Trainability">
                <ResourceSub 
                  text="Trainability"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={"Trainability"}/>
              </div >

              <div className="ResourcePart Personality">
                <ResourceSub 
                  text="Personality"
                  Border="5px solid #F9CB40"
                />
                <ResourceText text={"Personality"}/>
              </div>

              <div className="ResourcePart PsysicalNeeds">
                <ResourceSub 
                  text="Physical Needs"
                  Border=""
                />
                <ResourceText text={"Physical Needs"}/>
              </div>

              <div className="ResourcePart Health">
                <ResourceSub 
                  text="Health And Grooming"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={"Health and Grooming"}/>
            </div>
          </div>
      </div>
    )
  }