import React from 'react';
import Inputs from '../comps/Inputs';

export default {
    title:'Inputs',
    component: Inputs
};


export const DefaultLabel = () => <Inputs label="Default Label"></Inputs>;
export const UserNameInput = () => <Inputs label="User Name" color="#FF715B"></Inputs>;
export const FullNameInput = () => <Inputs label="Your Full Name" color="#FF715B"></Inputs>;
export const SignupEmailInput = () => <Inputs label="Email" color="#FF715B"></Inputs>;
export const LoginEmailInput = () => <Inputs label="Email" color="#2F52E0"></Inputs>;
export const PasswordInput = () => <Inputs label="Password" color="#2F52E0"></Inputs>;
