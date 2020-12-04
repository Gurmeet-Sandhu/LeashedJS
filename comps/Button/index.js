import React, {useEffect, useState, useContext} from 'react';
import {MyContext} from '../context';
import styled, { css } from 'styled-components';


const ButtonWrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border:none;
    border-radius:25px;
    background-color:${props => props.disabled ? "RGBA(47,82,224,0.14)" : "#2F52E0"};
    outline:none;
`;

const ButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:${props => props.disabled ?  "#000" : "#fff"};
    outline:none;
`;

const Button = ({ text, bgColor, disabled, onClick }) => {

    return <ButtonWrapper
        disabled={disabled} 
        onClick={onClick}
        bgColor={bgColor}>
        <ButtonText disabled={disabled}>{text}</ButtonText>
    </ButtonWrapper>
}

Button.defaultProps = {
    text: "default",
    bgColor: "#111",
}


export default Button;