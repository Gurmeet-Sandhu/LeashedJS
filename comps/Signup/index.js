import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/router'

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



const SignupBox = ({ LoginPart, SignupPart }) => {

  const router = useRouter()
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: ""
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'https://leashed-server.herokuapp.com/auth/signup',
      data: {
        first_name : info.firstName,
        last_name : info.lastName,
        email : info.email,
        username: info.username,
        password: info.password
      }
    })
      .then(resp => {
        console.log(resp.data)
        router.push('/Create')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Logboxcontainer>
      <Headerpart>
        <Link href="/Login"><Logintext>{LoginPart}</Logintext></Link>
        <Link href="/Signup"><Signuptext>{SignupPart}</Signuptext></Link>
      </Headerpart>
      <form onSubmit={handleSubmit}>
        <Logincontainer>
          <Inputs type="text" label="First Name" val={info.firstName} handleChange={(e) => setInfo({ ...info, firstName: e.target.value })} color="#FF715B" />
          <Inputs type="text" label="Last Name" val={info.lastName} handleChange={(e) => setInfo({ ...info, lastName: e.target.value })} color="#FF715B" />
          <Inputs type="text" label="Email" val={info.email} handleChange={(e) => setInfo({ ...info, email: e.target.value })} color="#FF715B" />
          <Inputs type="text" label="Username" val={info.username} handleChange={(e) => setInfo({ ...info, username: e.target.value })} color="#FF715B" />
          <Inputs type="password" label="Password" val={info.password} handleChange={(e) => setInfo({ ...info, password: e.target.value })} color="#FF715B" />
          <Button type="submit" text={"Sign Up"} bgColor={"#FF715B"} />
        </Logincontainer>
      </form>
    </Logboxcontainer>
  )

};



SignupBox.defaultProps = {

};

export default SignupBox;