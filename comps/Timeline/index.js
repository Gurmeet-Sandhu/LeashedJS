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



const Timeline= ({Htext, Subtext}) =>{
    return <div>
        <Header>{Htext}</Header>
        <Sub> {Subtext} <br></br> <hr></hr></Sub>
    
    </div>
}

Timeline.defaultProps = {
    Htext : "Insert Text Here",
    Subtext : "Date",
}

export default Timeline;