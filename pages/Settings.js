import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import Inputs from '../comps/Inputs';
import Drop from '../comps/Dropdown';
import Button2 from '../comps/Button2';
import {useRouter} from 'next/router';


export default function Settings() {
    const router = useRouter();
    const [expanded, setExpanded] = useState(false);
    return (
     <div className="Background">
         <div className="TopBar">
          <TopPart 
           Pagename ="Settings"
           openMenu={expanded}
                onClick={()=>{
                    setExpanded(!expanded)
                }}
                onReturn={()=>{
                    setExpanded(!expanded)
                }}
          />
        </div>
                <div className="SettingsSection">
                    <div className="ProfileImage">
                        <img class="image" src="/profile.png" width="100%" height="100%">
                        </img>
                    </div>
                    <div className="DogSettings">
                            <Inputs 
                                label="Dog Name"
                                state="true"
                            />
                            <Inputs 
                                label="Birthday "
                                state="true"
                            />
                            <Inputs 
                                label="Weight "
                                state="true"
                            />
                        <div className="SingleInput">
                            <Drop 
                                Title="Gender"
                            />
                        </div>
                        <div className="SingleInput">
                            <Drop 
                                Title="Breed"
                            />
                            </div>
                        
                        <Button2 
                            bgColor="#F9CB40"
                            text="Edit"
                        />

                    </div>
                    <div className="OwnerSettings">
                        <Inputs 
                            label="User name "
                            state="true"
                        />
                        <Inputs 
                            label="Dog Owner's Name "
                            state="true"
                        />
                        <Inputs 
                            label="Email "
                            state="true"
                        />
                        <Inputs 
                            label="Password"
                            state="true"
                        />
                        <Button2 
                            bgColor="#F9CB40"
                            text="Edit"
                        />
                        
                    </div>
              </div>
     </div>
    )
  }