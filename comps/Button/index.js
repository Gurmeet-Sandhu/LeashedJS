import React, { useEffect, useState } from 'react';
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

const Button = ({ text, bgColor, click, type }) => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(click);
    }, [click])

    return <ButtonWrapper type={type} clicked={clicked} onClick={() => {
        setClicked(true)
    }} bgColor={bgColor}>
        <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
}

Button.defaultProps = {
    text: "default",
    bgColor: "#111",
    click: false
}


export default Button;