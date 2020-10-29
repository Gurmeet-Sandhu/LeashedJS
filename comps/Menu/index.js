import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 289px; 
    height: 896px; 
    border-radius: 0px 20px 20px 0px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Poppins', sans-serif;
`;

//Top Container Styles

const TopContainer = styled.div`
    width: 289px; 
    height: 319px; 
    display: flex;
    border-radius: 0px 20px 0px 0px;
    background-color: #2F52E0;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;

const BackButton = styled.div`
    width: 50px; 
    height: 50px;
    positon: relative; 
    margin-right: 235px;
`;

const Img = styled.div`
    width: 184px; 
    height: 184px;
    border-radius: 25px;
    background: green;

`;

const NameBox = styled.div`
    font-size: 15px;
    margin: -10px;
`;

const EditBox = styled.div`
    font-weight: lighter;
`;

//Bottom Container Styles

const BottomContainer = styled.div`
    display: flex;
    border-radius: 0px 20px 0px 0px;
    display: flex; 
    flex-direction: column;
`;

const MenuCat = styled.div`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    margin: 35px;
    margin-top: 30px;
`;

const SmallTxt = styled.div`
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #1B2121;
    opacity: 0.8;
    margin: 9px;
    margin-left: 35px;
`;

const Logo = styled.div`
    width: 133px; 
    height: 30px;
    background-color: black;
`;



const MenuBox = ({Name1, Name2, Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7,  })=>{
  return (
    <MenuContainer>

        <TopContainer> 
            <BackButton>
                <img src=" /Lock.png" />

            </BackButton>
            <Img>

            </Img>
            <NameBox><h1>{Name1} &amp; {Name2}</h1></NameBox>
            <EditBox>Edit Profile</EditBox>
        </TopContainer>
        <BottomContainer> 
            <MenuCat>{Menu1}</MenuCat>
            <MenuCat>{Menu2}</MenuCat>
            <MenuCat>{Menu3}</MenuCat>
            <MenuCat>{Menu4}</MenuCat>
            <SmallTxt>{Menu5}</SmallTxt>
            <SmallTxt>{Menu6}</SmallTxt>
            <SmallTxt>{Menu7}</SmallTxt>
            <Logo></Logo>
        </BottomContainer>
    </MenuContainer>
)
};

MenuBox.defaultProps = {
    
};

export default MenuBox;