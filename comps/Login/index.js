import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Social from '../../comps/Social';
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

font-style: ExtraBold;
font-weight:bold;
font-size:30px;
`;

const Signuptext = styled.div`
font-style: ExtraBold;
font-weight:bold;
font-size:30px;
opacity:50%;
`;

const Logincontainer = styled.div`
  width:75%;
  height: 50%;
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


const LogBox = ({LoginPart, SignupPart})=> {
    const [disabled, setDisabled] = useState(false);
    useEffect(()=>{
        setDisabled(false);
    },[])


    return (
        <Logboxcontainer>

          <Headerpart>
          <Link href="Login"><Logintext>{LoginPart}</Logintext></Link>
          <Link href="SignUp"><Signuptext>{SignupPart}</Signuptext></Link>
          </Headerpart>
         
          <Logincontainer>
            <Inputs label="Email" color="#2F52E0" onChange={(e)=>{
                  var input_email = e.target.value.length;
              if (input_email === 0)  setDisabled(false) 
              console.log(input_email)
            }} />
            <Inputs label="Password" color="#2F52E0" onChange={(f)=>{
                  var input_pswd = f.target.value.length;
              if (input_pswd === 0)  setDisabled(false)
              else setDisabled(true)
              console.log(input_pswd)
            }}/> 
            <Button disabled={disabled} text={"Sign In"} bgColor={"#2F52E0"}/>           
            <div className="loginwith">or Login with</div>
            <Social/>
          </Logincontainer>

        </Logboxcontainer>
    )
    
};
    
    
  
 LogBox.defaultProps = {
      
  };
  
  export default LogBox;