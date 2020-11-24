import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    Display: flex; 
    flex-direction: column;
    width: 80vw;
    border-left:4px solid #2F52E0;
    position:relative;
    padding-left:20px;
    justify-content:center;
`;

const Header = styled.div`
    font-size: 20px; 
    font-weight: bold;
    margin-top:10px;
`;
const Sub = styled.div`
    font-weight:lighter;
    font-size: 14px;
`;

const Circle = styled.div`
    position:absolute;
    left:-12px;

    img {
        width:100%;
        max-width:100%;
        bottom:0;

    }
`;

const Timeline= ({Htext, Subtext}) =>{
    return <Wrapper>
        <Header>{Htext}</Header>
        <Sub> {Subtext}</Sub>
        <Circle><img src="/Circle_timeline.png"/></Circle>
        <br/>
    </Wrapper>
}

Timeline.defaultProps = {
    Htext : "Insert Text Here",
    Subtext : "Date",
}

export default Timeline;