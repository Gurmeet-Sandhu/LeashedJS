import React , {useState} from 'react';
import TopPart from '../comps/TopPart';
import ResourceSub from '../comps/ResourceSub';
import ResourceText from '../comps/ResourceText';
import {useRouter} from 'next/router';
import {parseCookies} from '../helpers'
import axios from 'axios'

function Resources(props) {
  const router = useRouter()
  const [expanded, setExpanded] = useState(false);
    return (
      <div className="ResourceContainer">
          <div className="TopBar">
            <TopPart 
            Pagename ="Resources"
            openMenu={expanded}
                  onClick={()=>{
                      setExpanded(!expanded)
                  }}
                  onReturn={()=>{
                      setExpanded(!expanded)
                  }}
            />
          </div>
          <div className="ResourceSection">

              <div className="ResourcePart Adaptability">
                <ResourceSub 
                  text="Adaptability"
                  Border=""
                />
                <ResourceText text={props.data.training.adaptability}/>
              </div>

              <div className="ResourcePart Trainability">
                <ResourceSub 
                  text="Trainability"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={props.data.training.trainability}/>
              </div >

              <div className="ResourcePart Personality">
                <ResourceSub 
                  text="Personality"
                  Border="5px solid #F9CB40"
                />
                <ResourceText text={props.data.training.personality}/>
              </div>

              <div className="ResourcePart PsysicalNeeds">
                <ResourceSub 
                  text="Physical Needs"
                  Border=""
                />
                <ResourceText text={props.data.training.physical_needs}/>
              </div>

              <div className="ResourcePart Health">
                <ResourceSub 
                  text="Health And Grooming"
                  Border="5px solid #FF715B"
                />
                <ResourceText text={props.data.training.health_and_grooming}/>
            </div>
          </div>
      </div>
    )
  }

  Resources.getInitialProps = async ({req, res}) => {
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

    // const apiURL = "http://localhost:3003"
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

  export default Resources