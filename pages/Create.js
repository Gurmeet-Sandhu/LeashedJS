import React from 'react';
import Signup from '../comps/SignupTitle';
import Stacked from '../comps/StackedLogo';
import CreateprofBox from '../comps/Profile';
import {useRouter} from 'next/router';

export default function Create() {
    return (
      <div className="SignupContainer">
        <div className="Header">
          <Signup 
              title="Almost There."
              subtitle="Let's create a profile for your doggie."
          />
        </div>
        <div className="SignupSection">
          <CreateprofBox

          />
        </div>
        <div className="stackedlogo">
        <Stacked/>
        </div>
      </div>
    )
  }