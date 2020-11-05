import React from 'react';
import styled from 'styled-components';

const Createprofboxcontainer = styled.div`
width: 330px;
margin-left:8px;
`;

const Createproftext = styled.div`
float:left;
margin-top:-50px;
margin-left:50px;
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
`;

const Logincontainer = styled.div`
width:362px;
height: 505px;
background: #ffffff;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 40px;
`;

const Headerpart = styled.div`
width:300x;
margin-left:40px;
margin-bottom: 40px;
`;

const Dogsnamebox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#FF715B;
`;

const Dogsuserinput = styled.div`
float:left;
margin-left:-97px;
margin-top:90px;
`;

const Straightline = styled.div`
margin-top:109px;
text-align:center;
justify-contents: center;
border-top: 1px solid black;
width:260px;
margin-left:50px;
`;

const Doguserinput = styled.div`
float:left;
margin-left:-95px;
margin-top:90px;
`;

const Dognamebox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#1B2121;
`;

const Createbutton = styled.div`
margin-top:175px;
margin-left:40px;
width:274px;
height: 45px;
border-radius: 193px;
border: 1px solid #F9CB40;
fill: solid;
background-color: #F9CB40;
float:center;
text-align:center;
justify-content: center;

`;

const Firsttext = styled.div`
justify-content: center;
margin:7px;
font-family: Poppins, Sans-serif;
font-size:24px;
color: #ffffff;
`;

const Birthdaynamebox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#1B2121;
`;

const Birthdayinput = styled.div`
float:left;
margin-left:-115px;
margin-top:90px;
`;

const Weightbox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#1B2121;
`;

const Yourweightinput = styled.div`
float:left;
margin-left:-60px;
margin-top:90px;
`;

const Straightlineright = styled.div`
margin-top:109px;
text-align:center;
justify-contents: center;
border-top: 1px solid black;
width:95px;
margin-left:215px;`;

const Straightlineleft = styled.div`
margin-top:110px;
text-align:center;
justify-contents: center;
border-top: 1px solid black;
width:130px;
margin-left:50px;`;

const Sidebar = styled.div`
margin-left:150px;
margin-top:-110px;
`;
const Bold = styled.div`
margin-top:-38px;
margin-left:25px;
`;


const Doggenderbox = styled.div`
float:left;
margin-left:50px;
margin-top:30px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#1B2121;
`;

const Dogbreedbox = styled.div`
float:left;
margin-left:-65px;
margin-top:90px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#1B2121;
`;

const Createprofbox = ({})=> {

    return (
        <Createprofboxcontainer>
          <Headerpart>
          <Createproftext>Create Profile</Createproftext>
          </Headerpart>
         
          <Logincontainer>
          <Dognamebox>Dog Name</Dognamebox>
          <Doguserinput>Humphrey</Doguserinput>
          <Straightline></Straightline>

          <Birthdaynamebox>Dog Birthday</Birthdaynamebox>
          <Birthdayinput>DD/MM/YYYY</Birthdayinput>
          <Straightlineleft></Straightlineleft>

          <Sidebar>
          <Weightbox>Weight</Weightbox>
          <Yourweightinput>6.5<Bold><h5>kg</h5></Bold></Yourweightinput>
          </Sidebar>
          <Straightlineright></Straightlineright>
          <Doggenderbox>Gender</Doggenderbox>
          <Dogbreedbox>Breed</Dogbreedbox>
          
          
          
          
          
          

          <Createbutton><Firsttext>Create</Firsttext></Createbutton>
          
      

          </Logincontainer>
        </Createprofboxcontainer>
    )
    
};
    
    
  
 Createprofbox.defaultProps = {
      
  };
  
  export default Createprofbox;