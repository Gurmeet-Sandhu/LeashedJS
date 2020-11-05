import React from 'react';
import LogBox from '../comps/Login';



export default {
    title: 'Login Signup/Login Comps',
    };

    export const LogSection = () => (
        <LogBox 
            LoginPart="Login"
            SignupPart="Signup"
            EmailPart="Your Email"
            PasswordPart="Your Password"
        />
      );
   