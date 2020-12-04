import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {MyContext} from '../context'

const Tipboxcontainer = styled.div`
width:30%;
min-height: 150px;
height:auto;
background: #fff;
border: 5px solid #2F52E0;
box-sizing: border-box;
border-radius: 25px;
display:flex;
flex-direction:column;
justify-content:center;
opacity:${props=> props.opacity ? "1" : "0"};
transform: ${props=>props.transform ? "translateY(0px)" : "translateY(120px)"};
position:absolute;
transition: 0.3s all ease;
`;

const TipBoxTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex:1;
`;

const Headertitle = styled.div`
    font-size:24pt;
    font-weight:bold;
    margin:10px;
`;

const Closebutton = styled.div`
    margin:10px;
    img {
        width:100%;
        height:100%;
    }
`;

const TipTextBox = styled.div`
text-align:center;
font-size:20px;
color:#000;
flex:10;
padding:10px;
`;


const TipBox = ({Header,Tiptext}) => {

    const context = useContext(MyContext)
    return <Tipboxcontainer opacity={context.tipbox} transform={context.tipbox}>
            <TipBoxTop>
            <Headertitle>{Header}</Headertitle>
                <Closebutton onClick={()=> {
                    context.setTipbox(!context.tipbox)
                }}><img src="/close.png" /></Closebutton>  
            </TipBoxTop>

            <TipTextBox>{Tiptext}</TipTextBox>

        </Tipboxcontainer>
    
};
    
    
  
 TipBox.defaultProps = {
      Header:"default",
      Tiptext: "Tip description goes here"
  };
  
  export default TipBox;