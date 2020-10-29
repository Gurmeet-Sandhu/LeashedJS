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
margin-left:30px;
margin-top:30px;
float:left;
`;

const Closebutton = styled.div`
margin-right:30px;
margin-top:30px;
float:right;
`;

const Questiontext = styled.div`
margin-top:150px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
`;

const Truebutton = styled.div`
margin-top:150px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
`;

const Falsebutton = styled.div`
margin-top:25px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
`;

const Pagenumber = styled.div`
margin-top:50px;
margin-left:45px;
width:223px;
float:center;
text-align:center;
`;

const QueBox = ({})=> {

    return (
        <Queboxcontainer>
            <Headertitle>Question #1</Headertitle>
            <Closebutton><img src="/close.png" /></Closebutton>
            <Questiontext>Question text goes here Hi</Questiontext>
            <Truebutton><img src="/truebutton.png" /></Truebutton>
            <Falsebutton><img src="/falsebutton.png" /></Falsebutton>
            <Pagenumber>1/5</Pagenumber>
        
        </Queboxcontainer>
    )
    
};
    
    
  
 QueBox.defaultProps = {
      
  };
  
  export default QueBox;