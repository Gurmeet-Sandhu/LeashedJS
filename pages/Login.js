import React from 'react';
import SignupBox from '../comps/Signup';
import Signup from '../comps/SignupTitle';
import LogBox from '../comps/Login';
import Social from '../comps/Social';

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
        <div className="Logo">
          <img src="/Horizontal Logo.png"></img>
        </div>
      </div>
    );
  }