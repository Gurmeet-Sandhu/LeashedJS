import React, {useEffect, useState} from 'react';
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
  const [disabled, setDisabled] = useState(false);
  useEffect(()=>{
      setDisabled(false);
  },[])
    return (
        <Logboxcontainer>
          <Headerpart>
            <Link href="/Login"><Logintext>{LoginPart}</Logintext></Link>
            <Link href="/Signup"><Signuptext>{SignupPart}</Signuptext></Link>
          </Headerpart>
         
          <Logincontainer>
            <Inputs label="Your Name" color="#FF715B" onChange={(e)=>{
                  var input_yourname = e.target.value.length;
              if (input_yourname === 0)  setDisabled(false) 
              console.log(input_yourname)
            }}/>
            <Inputs label="Username" color="#FF715B" onChange={(e)=>{
                  var input_useranme = e.target.value.length;
              if (input_useranme === 0)  setDisabled(false) 
              console.log(input_useranme)
            }}/>
            <Inputs label="Email" color="#FF715B" onChange={(e)=>{
                  var input_email = e.target.value.length;
              if (input_email === 0)  setDisabled(false) 
              console.log(input_email)
            }} />
            <Inputs label="Password" color="#FF715B" onChange={(f)=>{
                  var input_pswd = f.target.value.length;
              if (input_pswd === 0)  setDisabled(false)
              else setDisabled(true)
              console.log(input_pswd)
            }}/> 
            <Button disabled={disabled} text={"Sign Up"} bgColor={"#FF715B"}/> 
          </Logincontainer>
        </Logboxcontainer>
    )
    
};
    
    
  
 SignupBox.defaultProps = {
      
  };
  
  export default SignupBox;