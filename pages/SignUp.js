import React from 'react';
import Signup from '../comps/SignupTitle';
import SignupBox from '../comps/Signup';
import Stacked from '../comps/StackedLogo';

export default function Singup() {
    return (
      <div className="SignupContainer">
        <div className="Header">
          <Signup 
              title="Welcome!"
              subtitle="Get the best from Leashed."
          />
        </div>
        <div className="SignupSection">
          <SignupBox 
            LoginPart="Login"
            SignupPart="Signup"
          />
        </div>
        <div className="stackedlogo">
        <Stacked/>
        </div>
      </div>
    )
  }