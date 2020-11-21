import React from 'react';
import Signup from '../comps/SignupTitle';
import SignupBox from '../comps/Signup';
import Stacked from '../comps/StackedLogo';
import CreateprofBox from '../comps/Profile';

export default function Singup() {
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