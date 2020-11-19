import React, {useState} from 'react';
import styled, {css} from 'styled-components';


const ProfButtonWrapper = styled.button`
    display:flex;
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
    color:${props=>props.highlighted ? "#FF715B" : "#FF715B"};
    font-weight:bold;
`;

const TipsButton= ({text,bgColor,highlighted}) => {
    const [highlight, setHighlight] = useState(true);
    return <ProfButtonWrapper highlighted={highlight} 
            bgColor={bgColor} 
            onClick={()=> { 
                setHighlight(!highlight);
            }}>
            <ProfButtonText>{text}</ProfButtonText>
            </ProfButtonWrapper>
}

TipsButton.defaultProps = {
    text : "Tips!",
    bgColor : ""
}


export default TipsButton;