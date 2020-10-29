import React from 'react';
import styled from 'styled-components';

const Queboxcontainer = styled.div`
width:320px;
height: 485px;
background: #ffffff;
border: 5px solid #ff7158;
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

const Questiontext = styled.div`
margin-top:150px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
font-family: Poppins, Sans-serif;
font-style: medium;
font-size:20px;
`;

const Truebutton = styled.div`
margin-top:100px;
margin-left:45px;
width:230px;
height: 45px;
border-radius: 193px;
border: 4px solid #ff7158;
fill: solid;
background-color: #FF715B;
float:center;
text-align:center;
justify-content: center;

`;

const Falsebutton = styled.div`
margin-top:15px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
border: 4px solid #ff7158;
border-radius: 193px;
width:230px;
height: 45px;
`;

const Pagenumber = styled.div`
margin-top:15px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:18px;
line-height: 100%;
`;

const Firstanswer = styled.div`
justify-content: center;
margin:10px;
font-family: Poppins, Sans-serif;
font-size:24px;
color: #ffffff;
`;

const Secondanswer = styled.div`
justify-content: center;
margin:10px;
font-family: Poppins, Sans-serif;
font-size:24px;
color: #ff7158;

`;


const QueBox = ({ Header1, Question1, Pagenumber1 })=> {

    return (
        <Queboxcontainer>
            <Headertitle>{Header1}</Headertitle>
            <Closebutton><img src="/close.png" /></Closebutton>
            <Questiontext>{Question1}</Questiontext>
            <Truebutton><Firstanswer>True!</Firstanswer></Truebutton>
            <Falsebutton><Secondanswer>False!</Secondanswer></Falsebutton>
            <Pagenumber>{Pagenumber1}</Pagenumber>
        
        </Queboxcontainer>
    )
    
};
    
    
  
 QueBox.defaultProps = {
      
  };
  
  export default QueBox;