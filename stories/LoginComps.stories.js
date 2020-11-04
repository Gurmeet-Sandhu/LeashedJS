import React from 'react';
import LogBox from '../comps/Login';



export default {
    title: 'Leashed/Login Comps',
    };

    export const LogSection = () => (
        <LogBox 
            LoginPart="Login"
            SignupPart="Signup"
            EmailPart="Your Email"
            PasswordPart="Your Password"
        />
      );
   