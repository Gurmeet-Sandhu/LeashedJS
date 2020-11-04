import React from 'react';
import SignupBox from '../comps/Signup';



export default {
    title: 'Leashed/Signup Comps',
    };

    export const SignupSection = () => (
        <SignupBox 
            
        LoginPart="Login"
        SignupPart="Signup"
        UsernamePart="User Name"
        FullnamePart="Your Full Name"
        YourEmail="Email"
        />
      );