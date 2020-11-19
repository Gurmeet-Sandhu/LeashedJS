import React from 'react';
import Signup from '../comps/SignupTitle';
import LogBox from '../comps/Login';
import Stacked from '../comps/StackedLogo';

export default function Login() {
    return (
      <div className="LoginContainer">
        <div className="Header">
          <Signup 
            title="Hello Again!"
            subtitle="Get the best from Leashed."
          />
        </div>
        <div className="LoginSection">
          <LogBox   
              LoginPart="Login"
              SignupPart="Signup"
          />
        </div>
        <div className="stackedlogo">
        <Stacked/>
        </div>
      </div>
    );
  }