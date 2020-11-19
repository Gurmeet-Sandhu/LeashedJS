import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Link from 'next/link';

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
  margin:10px;
`;

const Logintext = styled.div`
font-weight: bold;
font-size:30px;
opacity:50%;
`;

const Signuptext = styled.div`
font-weight: bold;
font-size:30px;
`;



const Logincontainer = styled.div`

  width:75%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:#fff;
  padding:40px;
  border-radius:25px;

`;



const SignupBox = ({LoginPart, SignupPart})=> {

    return (
        <Logboxcontainer>
          <Headerpart>
            <Link href="/Login"><Logintext>{LoginPart}</Logintext></Link>
            <Link href="/Signup"><Signuptext>{SignupPart}</Signuptext></Link>
          </Headerpart>
         
          <Logincontainer>
            <Inputs label="Your Name" color="#FF715B"/>
            <Inputs label="Username" color="#FF715B"/>
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