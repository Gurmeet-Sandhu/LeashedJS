import React, {useEffect, useState, useContext} from 'react';
import styled, {css} from 'styled-components';
import {MyContext} from '../context';


const ButtonWrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border:none;
    border-radius:25px;
    background-color:${props => props.disabled ? "#2F52E0" : "RGBA(47,82,224,0.14)"};
    outline:none;
`;

const ButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:${props => props.disabled ? "#fff" : "#000"};
    outline:none;
`;

const Button= ({text,bgColor, disabled, onClick}) => {
   
    return <ButtonWrapper 
            disabled={disabled} 
            bgColor={bgColor} 
            onClick={onClick}>
       <ButtonText disabled={disabled}>{text}</ButtonText>
    </ButtonWrapper>
}

Button.defaultProps = {
    text : "default",
    bgColor : "#fff",
}


export default Button;