import React, {useState} from 'react';
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
    background-color:${props=>props.highlighted ? "#F9CB40" : "#fff"};
`;

const ButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:${props=>props.highlighted ? "#fff" : "#1B2121"};
    font-weight:bold;
`;

const Button2= ({text,bgColor,highlighted}) => {
    const [highlight, setHighlight] = useState(true);
    return <ButtonWrapper highlighted={highlight} 
            bgColor={bgColor} 
            onClick={()=> { 
                setHighlight(!highlight);
            }}>
            <ButtonText>{text}</ButtonText>
            </ButtonWrapper>
}

Button2.defaultProps = {
    text : "defualt",
    bgColor : "#F9CB40"
}


export default Button2;