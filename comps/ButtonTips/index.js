import React, {useState, useContext, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {MyContext} from '../context';


const ProfButtonWrapper = styled.div`
    justify-content:center;
    align-items:center;
    padding:4px;
    border-style:none;
    background-color:transparent;
`;

const ProfButtonText = styled.div`
    display:inline-flex;
    border:none;
    margin:5px;
    backgroundcolor:transparent;
    color:#FF715B;
    font-weight:bold;
`;

const TipsButton= ({text, onClick}) => {
    return <ProfButtonWrapper
            onClick={onClick}>
            <ProfButtonText>{text}</ProfButtonText>
            </ProfButtonWrapper>
            
}


TipsButton.defaultProps = {
    text : "Tips!",
    bgColor : ""
}


export default TipsButton;