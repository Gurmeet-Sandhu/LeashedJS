import React from 'react';
import styled from 'styled-components';

const Tipboxcontainer = styled.div`
width:320px;
height: 322px;
background: #ffffff;
border: 5px solid #2F52E0;
box-sizing: border-box;
border-radius: 30px;
`;

const Headertitle = styled.div`
margin-left:25px;
margin-top:25px;
float:left;
font-family: Poppins, Sans-serif;
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
font-family: Poppins, Sans-serif;
font-style: medium;
font-size:20px;
`;

const Tipbutton = styled.div`
margin-top:50px;
margin-left:25px;
width:251px;
height: 39.92px;
border-radius: 193px;
border: 4px solid #2F52E0;
fill: solid;
background-color: #2F52E0;
float:center;
text-align:center;
justify-content: center;

`;

const Firsttext = styled.div`
justify-content: center;
margin:7px;
font-family: Poppins, Sans-serif;
font-size:24px;
color: #ffffff;
`;


const TipBox = ({Header1,Tiptext1})=> {

    return (
        <Tipboxcontainer>
          <Headertitle>{Header1}</Headertitle>
            <Closebutton><img src="/close.png" /></Closebutton>  
            <Tiptext>{Tiptext1}</Tiptext>
            <Tipbutton><Firsttext>Text</Firsttext></Tipbutton>
        </Tipboxcontainer>
    )
    
};
    
    
  
 TipBox.defaultProps = {
      
  };
  
  export default TipBox;