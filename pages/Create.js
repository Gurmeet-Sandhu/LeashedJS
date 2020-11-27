import React, { useState } from 'react';
import Signup from '../comps/SignupTitle';
import Stacked from '../comps/StackedLogo';
import CreateprofBox from '../comps/Profile';
import { useRouter } from 'next/router';
import { parseCookies } from '../helpers'
import axios from 'axios'

function Create({ token }) {
  const router = useRouter()
  const [info, setInfo] = useState({
    dogName: "",
    age: 0,
    weight: "",
    gender: "",
    breed: ""
  })

  const handleNameChange = (e) => {
    setInfo({ ...info, dogName: e.target.value })
  }

  const handleAgeChange = (e) => {
    setInfo({ ...info, age: e.target.value })
  }

  const handleWeightChange = (e) => {
    setInfo({ ...info, weight: e.target.value })
  }

  const handleGenderChange = (e) => {
    setInfo({ ...info, gender: e.target.value })
  }

  const handleBreedChange = (e) => {
    setInfo({ ...info, breed: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const apiURL = "https://leashed-server.herokuapp.com"
    const authAxios = axios.create({
      baseURL: apiURL,
      headers: {
        Authorization: `${token}`
      }
    })
    try {
      const resp = await authAxios.post('/user/createDog', {
        name: info.dogName,
        breed: info.breed,
        photo_url: "photo_url",
        age: info.age,
        weight: info.weight,
        gender: info.gender
      })
      // if(resp.data){

      // }

      router.push('/Home')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="SignupContainer">
      <div className="Header">
        <Signup
          title="No dog profile yet!"
          subtitle="Let's create a profile for your doggie."
        />
      </div>
      <div className="SignupSection">
        <CreateprofBox
          info={info}
          handleNameChange={handleNameChange}
          handleWeightChange={handleWeightChange}
          handleAgeChange={handleAgeChange}
          handleGenderChange={handleGenderChange}
          handleBreedChange={handleBreedChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="stackedlogo">
        <Stacked />
      </div>
    </div>
  )
}

Create.getInitialProps = ({ req }) => {
  const data = parseCookies(req);
  const token = JSON.parse(data.user)

  return { token }
}


export default Create