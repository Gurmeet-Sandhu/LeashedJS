
import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';


const Btn3Wrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border: ${props=>props.border ? props.border : "3px solid #2F52E0"};
    border-radius:25px;
    background-color:#fff;
`;

const Btn3Text = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:#1B2121;
`;

const Button3= ({text, onClick, border}) => {
    return <Btn3Wrapper style={{border:border}}
            onClick={onClick}>
            <Btn3Text>{text}</Btn3Text>
            </Btn3Wrapper>
}

Button3.defaultProps = {
    text : "default",
    bgColor : "#F9CB40",
    textcolor: "#000"
}


export default Button3;