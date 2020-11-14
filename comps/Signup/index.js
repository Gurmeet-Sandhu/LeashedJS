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

font-style: ExtraBold;
font-size:30px;
opacity:50%;
`;

const Signuptext = styled.div`

font-style: ExtraBold;
font-size:30px;
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



const SignupBox = ({LoginPart, SignupPart})=> {

    return (
        <Logboxcontainer>
          <Headerpart>
          <Logintext>{LoginPart}</Logintext>
          <Signuptext>{SignupPart}</Signuptext>
          </Headerpart>
         
          <Logincontainer>


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