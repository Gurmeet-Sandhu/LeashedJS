import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Social from '../../comps/Social';
import Link from 'next/link';
import axios from 'axios';

import { useCookies } from 'react-cookie'

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


const LogBox = ({ LoginPart, SignupPart, EmailPart, PasswordPart }) => {

  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")
  const [cookie, setCookie] = useCookies(['user'])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://leashed-server.herokuapp.com/auth/login',
      data: {
        username: username,
        password: password
      }
    })
      .then(resp => {
        console.log(resp)
        console.log(resp.data.access_token)
        setCookie('user', JSON.stringify(resp.data.access_token), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        })
        if (!resp.data.user.dogs[0]) {
          router.push('/Create')
        } else {
          router.push('/Home')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Logboxcontainer>
      <Headerpart>
        <Link href="Login"><Logintext>{LoginPart}</Logintext></Link>
        <Link href="SignUp"><Signuptext>{SignupPart}</Signuptext></Link>
      </Headerpart>
      <form onSubmit={handleSubmit}>
        <Logincontainer>
          <Inputs label="Email" color="#2F52E0" type="text" val={username} handleChange={handleUsernameChange} />
          <Inputs label="Password" color="#2F52E0" type="password" val={password} handleChange={handlePasswordChange} />
          <Button text={"Sign In"} bgColor={"#2F52E0"} type="submit" />
          <div className="loginwith">or Login with</div>
          <Social />
        </Logincontainer>
      </form>
    </Logboxcontainer>
  )

};



LogBox.defaultProps = {

};

export default LogBox;