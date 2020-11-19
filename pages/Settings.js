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

                    </div>
                    <div className="DogSettings">
                            <Inputs 
                                label="Dog Name"
                            />
                        <div className="DualInput">
                            <Inputs 
                                label="Dog Birthday "
                            />
                            <Inputs 
                            label="Weight "
                            />
                        </div>
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
                        />
                        <Inputs 
                            label="Dog Owner's Name "
                        />
                        <Inputs 
                            label="Email "
                        />
                        <Inputs 
                            label="Password"
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