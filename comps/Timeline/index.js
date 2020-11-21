import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    font-size: 22px; 
    font-weight: bold;
`;
const Sub = styled.div`
    font-weight:lighter;
    font-size: 14px;
`;

const Wrapper = styled.div`
    Display: flex; 
    flex-direction: column;
    width: 80vw;
    margin: 5%;
`;



const Timeline= ({Htext, Subtext}) =>{
    return <Wrapper>
        <Header>{Htext}</Header>
        <Sub> {Subtext} <br></br> <hr></hr></Sub>
    
    </Wrapper>
}

Timeline.defaultProps = {
    Htext : "Insert Text Here",
    Subtext : "Date",
}

export default Timeline;