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
  const [lock, setLock] = useState(true);
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

      <div className="Training_Cards">
        <div className="traning_card">
          {
            props.data.training.levels.map(level => {
              return (<TrainingPageCard
                id={level}
                token={props.token}
                day_no={props.data.user.tracker.day_no}
                lock={lock}
              />)
            })
          }
        </div>
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