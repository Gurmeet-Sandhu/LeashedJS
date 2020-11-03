import React from 'react';
import styled from 'styled-components';

const Logboxcontainer = styled.div`
width: 330px;
margin-left:8px;
`;

const Logintext = styled.div`
float:left;
margin-top:-50px;
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
`;

const Signuptext = styled.div`
float:right;
margin-top:-50px;
font-family: Mukta Mahee, Sans-serif;
font-style: ExtraBold;
font-size:30px;
color: rgba(27, 33, 33, 0.5);
`;

const Logincontainer = styled.div`
width:362px;
height: 547.49px;
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

const Youremailbox = styled.div`
float:left;
margin-left:50px;
margin-top:50px;
font-family: Poppins, Sans-serif;
font-style: SemiBold;
font-size:20px;
color:#2F52E0;
`;

const Yourinput = styled.div`
float:left;
margin-left:55px;
margin-top:10px;
border: 1px solid #E5E5E5;
`;

// const Straightline = styled.div`
// margin-top:110px;
// text-align:center;
// justify-contents: center;
// border-top: 1px solid black;
// width:260px;
// margin-left:50px;
// `;

// const Yourpassinput = styled.div`
// float:left;
// margin-left:-85px;
// margin-top:90px;
// `;

// const Yourpassbox = styled.div`
// float:left;
// margin-left:50px;
// margin-top:50px;
// font-family: Poppins, Sans-serif;
// font-style: SemiBold;
// font-size:20px;
// color:#2F52E0;
// `;

// const Forgotpass = styled.div`
// float:right;
// width:170px;
// margin-top:10px;
// font-family: Mukta Mahee, Sans-serif;
// font-style: normal;
// font-size:14px;
// `;

// const Logbutton = styled.div`
// margin-top:75px;
// margin-left:40px;
// width:274px;
// height: 45px;
// border-radius: 193px;
// border: 4px solid #2F52E0;
// fill: solid;
// background-color: #2F52E0;
// float:center;
// text-align:center;
// justify-content: center;

// `;

// const Firsttext = styled.div`
// justify-content: center;
// margin:7px;
// font-family: Poppins, Sans-serif;
// font-size:24px;
// color: #ffffff;
// `;

// const Loginwith = styled.div`
// float:right;
// width:220px;
// margin-top:10px;
// font-family: Mukta Mahee, Sans-serif;
// font-style: normal;
// font-size:14px;
// `;


const LogBox = ({})=> {

    return (
        <Logboxcontainer>
          <Headerpart>
          <Logintext>Login</Logintext>
          <Signuptext>Signup</Signuptext>
          </Headerpart>
         
          <Logincontainer>
          {/* <Youremailbox>Your Email</Youremailbox>
          <Yourinput><input type="email"></input></Yourinput>
          <Straightline></Straightline>
          <Yourpassbox>Password</Yourpassbox>
          <Yourpassinput>***************</Yourpassinput>
          <Straightline></Straightline>
          <Forgotpass>Forgot password?</Forgotpass>
          <Logbutton><Firsttext>Login</Firsttext></Logbutton>
          <Loginwith>Or log in with</Loginwith> */}
        <form>
        <Youremailbox>Your Email</Youremailbox>
        <Yourinput><input type="email"></input></Yourinput>
        {/* <Logbutton input type="submit"><Firsttext>Login</Firsttext></Logbutton> */}
        </form>

          </Logincontainer>
        </Logboxcontainer>
    )
    
};
    
    
  
 LogBox.defaultProps = {
      
  };
  
  export default LogBox;