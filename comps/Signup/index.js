import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Social from '../../comps/Social';

const Logboxcontainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`;

const Headerpart = styled.div`
  width:80%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const Logintext = styled.div`
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
opacity:50%;
`;

const Signuptext = styled.div`
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

const Youremailinput = styled.div`
float:left;
margin-left:-48px;
margin-top:90px;
`;

const Youremailbox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#FF715B;
`;

const Signbutton = styled.div`
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


const Logincontainer = styled.div`
  width:75%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  border:1px solid black;
  background-color:#fff;
  padding:40px;
  border-radius:25px;


  div.loginwith {
    font-size:10px;
    margin:10px;
    color: #1B2121;
    opacity:80%;
  }
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
          <Youremailbox>{YourEmail}</Youremailbox>
          <Youremailinput>emmaduffy1001@gmail.com</Youremailinput>
          <Straightline></Straightline>
          <Signbutton><Firsttext>Sign Up</Firsttext></Signbutton>
          
      

            <Inputs label="Your Name" color="#FF715B"/>
            <Inputs label="Your Full Name" color="#FF715B"/>
            <Inputs label="Email" color="#FF715B" />
            <Inputs label="Password" color="#FF715B"/> 
            <Button text={"Sign Up"} bgColor={"#FF715B"}/> 


          </Logincontainer>
        </Logboxcontainer>
    )
    
};
    
    
  
 SignupBox.defaultProps = {
      
  };
  
  export default SignupBox;