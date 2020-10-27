import React from 'react';

import { Header } from './Header';

import { SignupBox } from './SignupBox';

import { SignupButton} from './SignupButton';

import { SignupBanner } from './SignupBanner';
 
export default {
    title: 'Week02/SignupComps',
    };

    export const Head = () => {
        return (
            <Header />
        );
    }

    export const  box = () => {
        return (
            <SignupBox />
        );
    }

    export const  button = () => {
        return (
            <SignupButton />
        );
    }

    export const  banner = () => {
        return (
            <SignupBanner />
        );
    }