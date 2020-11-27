import React, { useState } from 'react';
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
const Createprofbox = ({
  info,
  handleSubmit,
  handleNameChange,
  handleWeightChange,
  handleAgeChange,
  handleBreedChange,
  handleGenderChange
}) => {

  return (
    <Createprofboxcontainer>
      <Headerpart>
        <Createproftext>Create Profile</Createproftext>
      </Headerpart>
      <form onSubmit={handleSubmit}>
        <Logincontainer>
          <Inputs label="Dog Name" color="#000000" val={info.dogName} handleChange={handleNameChange} />
          <Sidetoside>
            <Birthdaysize>
              <Inputs label="Age" color="#000000" val={info.age} handleChange={handleAgeChange} />
            </Birthdaysize>
            <Weightsize>
              <Inputs label="Weight (kg)" color="#000000" val={info.weight} handleChange={handleWeightChange} />
            </Weightsize>
          </Sidetoside>
          <Drop
            val={info.gender}
            handleChange={handleGenderChange}
            Title={"Gender"}
            Input0={""}
            Input1={"Male"}
            Input2={"Male Neutered"}
            Input3={"Female"}
            Input4={"Female Spayed"}
            color={"#F9CB40"} />
          <Space1></Space1>
          <Drop
            val={info.breed}
            handleChange={handleBreedChange}
            Title={"Dog Breed"}
            Input0={""}
            Input1={"Labrador Retriever"}
            Input2={"German Shepherd"}
            Input3={"French Bulldog"}
            color={"#F9CB40"} />
          <Space></Space>
          <Button type="submit" text={"Create"} bgColor={"#F9CB40"} />
        </Logincontainer>
      </form>
    </Createprofboxcontainer>
  )

};



Createprofbox.defaultProps = {

};

export default Createprofbox;