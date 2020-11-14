import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';

const Createprofboxcontainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`;

const Createproftext = styled.div`
font-style: ExtraBold;
font-size:30px;
display:flex;
justify-content:center;
align-items:center;
`;

const Logincontainer = styled.div`
width:75%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border:1px solid black;
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

const Headerpart = styled.div`
  width:100%;
  display:flex;
justify-content:center;
align-items:center;
`;

const Sidetoside = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`;

const Birthdaysize = styled.div`
input {
  width:140px;
}
`;

const Weightsize = styled.div`
margin-left:10px;
input {
  width:110px;
}
`;
const Createprofbox = ({})=> {

    return (
        <Createprofboxcontainer>
          <Headerpart>
          <Createproftext>Create Profile</Createproftext>
          </Headerpart>
         
          <Logincontainer>

            <Inputs label="Dog Name" color="#000000"/>
            <Sidetoside>
            <Birthdaysize>
            <Inputs label="Dog Birthday" color="#000000"/>
            </Birthdaysize>
            <Weightsize>
            <Inputs label="Weight" color="#000000" /> 
            </Weightsize>
            
            </Sidetoside>
            <Button text={"Create"} bgColor={"#F9CB40"}/>

          </Logincontainer>
        </Createprofboxcontainer>
    )
    
};
    
    
  
 Createprofbox.defaultProps = {
      
  };
  
  export default Createprofbox;