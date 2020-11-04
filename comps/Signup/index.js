import React from 'react';
import styled from 'styled-components';


const Logboxcontainer = styled.div`
width: 330px;
margin-left:8px;
`;

const Logintext = styled.div`
float:left;
margin-top:-50px;
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
color: rgba(27, 33, 33, 0.5);
`;

const Signuptext = styled.div`
float:right;
margin-top:-50px;
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
`;

const Logincontainer = styled.div`
width:362px;
height: 505px;
background: #ffffff;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 40px;
`;

const Headerpart = styled.div`
width:300x;
margin-left:40px;
margin-bottom: 40px;
`;

const Yourusernamebox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#FF715B;
`;

const Youruserinput = styled.div`
float:left;
margin-left:-97px;
margin-top:90px;
`;

const Straightline = styled.div`
margin-top:110px;
text-align:center;
justify-contents: center;
border-top: 1px solid black;
width:260px;
margin-left:50px;
`;

const Yourpassinput = styled.div`
float:left;
margin-left:-48px;
margin-top:90px;
`;

const Yourpassbox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#FF715B;
`;

const Logbutton = styled.div`
margin-top:75px;
margin-left:40px;
width:274px;
height: 45px;
border-radius: 193px;
border: 4px solid #FF715B;
fill: solid;
background-color: #FF715B;
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

const Yourfullnamebox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#FF715B;
`;

const Yournameinput = styled.div`
float:left;
margin-left:-135
px;






margin-top:90px;
`;

const SignupBox = ({LoginPart, SignupPart, UsernamePart, FullnamePart, YourEmail})=> {

    return (
        <Logboxcontainer>
          <Headerpart>
          <Logintext>{LoginPart}</Logintext>
          <Signuptext>{SignupPart}</Signuptext>
          </Headerpart>
         
          <Logincontainer>
          <Yourusernamebox>{UsernamePart}</Yourusernamebox>
          <Youruserinput>johndoe123@domain.com</Youruserinput>
          <Straightline></Straightline>
          <Yourfullnamebox>{FullnamePart}</Yourfullnamebox>
          <Yournameinput>Emma Duffy</Yournameinput>
          <Straightline></Straightline>
          <Yourpassbox>{YourEmail}</Yourpassbox>
          <Yourpassinput>emmaduffy1001@gmail.com</Yourpassinput>
          <Straightline></Straightline>
      
          
      

          </Logincontainer>
        </Logboxcontainer>
    )
    
};
    
    
  
 SignupBox.defaultProps = {
      
  };
  
  export default SignupBox;