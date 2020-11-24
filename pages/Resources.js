import React , {useState} from 'react';
import TopPart from '../comps/TopPart';
import DogBox from '../comps/DogBox';
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
              <div className="dog">

                <DogBox dogname="Welsh Corgi"/>
              </div>
              <div className="ResourcePart Adaptability">
                <ResourceSub 
                  text="Adaptability"
                  Border=""
                />
                <ResourceText text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}/>
              </div>

              <div className="ResourcePart Trainability">
                <ResourceSub 
                  text="Trainability"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."}/>
              </div >

              <div className="ResourcePart Personality">
                <ResourceSub 
                  text="Personality"
                  Border="5px solid #F9CB40"
                />
                <ResourceText text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}/>
              </div>

              <div className="ResourcePart PsysicalNeeds">
                <ResourceSub 
                  text="Physical Needs"
                  Border=""
                />
                <ResourceText text={"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}/>
              </div>

              <div className="ResourcePart Health">
                <ResourceSub 
                  text="Health And Grooming"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={"It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}/>
            </div>
          </div>
      </div>
    )
  }