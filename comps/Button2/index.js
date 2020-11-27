import React, {useState} from 'react';
import styled, {css} from 'styled-components';


const ProfButtonWrapper = styled.button`
    width:275px;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:4px;
    border:${props=>props.highlighted ? "none" : "5px solid #F9CB40"};
    border-radius:25px;
    background-color:${props=>props.highlighted ? "#F9CB40" : "#fff"};
`;

const ProfButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:${props=>props.highlighted ? "#fff" : "#1B2121"};
`;

const Button2= ({text,bgColor,highlighted, onClick}) => {
    const [highlight, setHighlight] = useState(true);
    return <ProfButtonWrapper highlighted={highlight} 
            bgColor={bgColor} 
            onClick={onClick}>
            <ProfButtonText>{text}</ProfButtonText>
            </ProfButtonWrapper>
}

Button2.defaultProps = {
    text : "defualt",
    bgColor : "#F9CB40"
}


export default Button2;