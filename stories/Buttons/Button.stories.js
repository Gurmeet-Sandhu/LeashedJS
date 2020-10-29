import React from 'react';
import Button from '../../comps/Button';

export default {
  title: 'Button/BasicButton',
  component: Button,
};

export const BasicButton = () => <Button />
export const SignUpBtn = () => <Button text={"Sign Up"} bgColor={"#FF715B"}/>
export const CreateBtn = () => <Button text={"Create"} bgColor={"#F9CB40"}/>
export const SignInBtn = () => <Button text={"Sign In"} bgColor={"#2F52E0"}/>


