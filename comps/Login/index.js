import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Social from '../../comps/Social';

const Logboxcontainer = styled.div`
width: 100vw;
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
`;

const Signuptext = styled.div`
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
opacity:50%;
`;

const Logincontainer = styled.div`
  width:75%;
  height: 55vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
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


const LogBox = ({LoginPart, SignupPart, EmailPart, PasswordPart})=> {

    return (
        <Logboxcontainer>
          <Headerpart>
          <Logintext>{LoginPart}</Logintext>
          <Signuptext>{SignupPart}</Signuptext>
          </Headerpart>
         
          <Logincontainer>
            <Inputs label="Email" color="#2F52E0" />
            <Inputs label="Password" color="#2F52E0"/> 
            <Button text={"Sign In"} bgColor={"#2F52E0"}/>           
            <div className="loginwith">or Login with</div>
            <Social/>
          </Logincontainer>
        </Logboxcontainer>
    )
    
};
    
    
  
 LogBox.defaultProps = {
      
  };
  
  export default LogBox;