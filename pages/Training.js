import React, { useState } from 'react';
import TopPart from '../comps/TopPart';
import TrainingPageCard from '../comps/TrainingPageCard';
import { useRouter } from 'next/router';
import axios from 'axios';
import { parseCookies } from '../helpers';

function Training(props) {
  console.warn('training page data', props.data)
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="TrainingContainer">
      <div className="TopBar">
        <TopPart
          Pagename="Training"
          openMenu={expanded}
          onClick={() => {
            setExpanded(!expanded)
          }}
          onReturn={() => {
            setExpanded(!expanded)
          }}
        />
      </div>
      <div className="TrainingCard">
        {
          props.data.training.levels.map(level => {
            return (<TrainingPageCard
              id={level}
              token={props.token}
            />)
          })
        }
        {/* <TrainingPageCard 
          title="Master the Dog Walk"
          />
          <TrainingPageCard 
          title="Pee & Poo"
          />
          <TrainingPageCard 
          title="Basic Dog Commands"
          />
          <TrainingPageCard 
          title="Socialization"
          /> */}
      </div>
    </div>

  )
}

Training.getInitialProps = async ({ req}) => {

  const data = parseCookies(req)

  if (!data.user) {
    if (res) {
      res.writeHead(301, { Location: "/Login" })
      res.end()
    }
    else {
      return { data: undefined }
    }

  }

  const token = JSON.parse(data.user)
  console.log("initial props" + data.user)

  const apiURL = "https://leashed-server.herokuapp.com"
  const authAxios = axios.create({
    baseURL: apiURL,
    headers: {
      Authorization: `${token}`
    }
  })
  try {
    const resp = await authAxios.get('/user/training')
    const result = {
      data: resp.data,
      token: token
    }
    return result

  } catch (error) {
    console.log(error.message)
  }


}

export default Training