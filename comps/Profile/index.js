import React from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';
import Inputs from '../../comps/Inputs';
import Drop from '../../comps/Dropdown';

const Createprofboxcontainer = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
border: none;
`;

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
border: none;
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

const Label = styled.div`
font-size: 20px;
text-align: left;
margin-bottom:10px;
margin-right:auto;
margin-left:auto;

`;

const Space1 = styled.div`
margin:5px;
`;

const Space = styled.div`
margin:15px;
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
            <Inputs label="Weight (kg)" color="#000000" /> 
            </Weightsize>
            
            </Sidetoside>
            
            <Drop 
            Title={"Gender"} 
            Input0={""} 
            Input1={"Male"} 
            Input2={"Male Neutered"}
            Input3={"Female"} 
            Input4={"Female Spayed"}
            color={"#F9CB40"}/>
            <Space1></Space1>
            <Drop Title={"Dog Breed"}
            Input0={""} 
            Input1={"Labrador Retriever"} 
            Input2={"German Shepherd"}
            Input3={"French Bulldog"} 
             color={"#F9CB40"}/>
            <Space></Space>
            <Button text={"Create"} bgColor={"#F9CB40"}/>
            

          </Logincontainer>
        </Createprofboxcontainer>
    )
    
};
    
    
  
 Createprofbox.defaultProps = {
      
  };
  
  export default Createprofbox;