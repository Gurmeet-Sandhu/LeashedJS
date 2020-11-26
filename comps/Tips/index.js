import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const Tipboxcontainer = styled.div`
width:320px;
height: 322px;
background: #ffffff;
border: 5px solid #2F52E0;
box-sizing: border-box;
border-radius: 30px;
visibility:${props=>props.hiddentext ? "visible" : "hidden"};
`;

const Headertitle = styled.div`
margin-left:25px;
margin-top:25px;
float:left;
font-size:36px;
`;

const Closebutton = styled.div`
margin-right:25px;
margin-top:25px;
float:right;
`;

const Tiptext = styled.div`
margin-top:150px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
font-style: medium;
font-size:20px;
`;


const Container = styled.div``;

const TipsButton = styled.div`
    justify-content:center;
    align-items:center;
    padding:4px;
    border-style:none;
    background-color:transparent;
    color:#FF715B;
    font-weight:bold;
`;

const TipBox = ({Header1,Tiptext1})=> {
    const [hiddentext, setHiddentext] = useState(false);
    return (
        <Container>
            <TipsButton onClick={()=>{
                setHiddentext(true);
            }}>Tips!</TipsButton>
            <Tipboxcontainer hiddentext={hiddentext}>
          <Headertitle>{Header1}</Headertitle>
            <Closebutton onClick={()=>{
                setHiddentext(false);
            }}><img src="/close.png" /></Closebutton>  
            <Tiptext>{Tiptext1}</Tiptext>
        </Tipboxcontainer>
        </Container>
        
    )
    
};
    
    
  
 TipBox.defaultProps = {
      
  };
  
  export default TipBox;