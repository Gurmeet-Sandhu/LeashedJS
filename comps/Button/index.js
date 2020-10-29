import React from 'react';
import styled, {css} from 'styled-components';


const ButtonWrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border:none;
    border-radius:25px;
    background-color:${props=>props.bgColor ? props.bgColor : "#fff"};
`;

const ButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:#fff;
`;

const Button= ({text,bgColor}) => {
    return <ButtonWrapper bgColor={bgColor}>
       <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
}

Button.defaultProps = {
    text : "defualt",
    bgColor : "#111"
}


export default Button;