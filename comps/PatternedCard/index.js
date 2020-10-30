import React from 'react';
import styled from 'styled-components';

const PatternedCardContaienr = styled.div`
    width: 368px;
    height: 174px;
    background-color:#2F52E0;
    border-radius:30px;
    display:flex;
    align-items:center;
`

const PatternedCardTitle = styled.div`
    font-size:24px;
    font-weight:bold;
    max-width:200px;
    margin-left:35px;
    color:white;
`

const PatternedCard = (text) => {
    return <PatternedCardContaienr>
        <PatternedCardTitle>
            Completed How To Use Treats
        </PatternedCardTitle>
    </PatternedCardContaienr>
}

PatternedCard.defaultProps ={
    text:"test"
}


export default PatternedCard;