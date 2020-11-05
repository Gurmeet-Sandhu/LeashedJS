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
    margin-right: 230px;
    cursor: pointer;
`;

const Img = styled.img`
    width: 184px; 
    height: 184px;
    border-radius: 25px;
    background: green;

`;

const NameBox = styled.div`
    font-size: 13px;
    margin: -10px;
    color: white;
    display: flex; 
    flex-direction: row;
    .Name1 {
        color:#F9CB40;
        
    }
    .Name2 {
        color: #FF715B;
    }
`;

const EditBox = styled.div`
    font-weight: lighter;
    color: white;
    cursor: pointer;
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
    margin-top: 20px;
    cursor: pointer;
`;

const SmallTxt = styled.div`
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #1B2121;
    opacity: 0.8;
    margin: 9px;
    margin-left: 35px;
    cursor: pointer;
`;

const Logo = styled.img`
    width: 133px; 
    height: 30px;
    display: flex;
    margin-top: 100px;
    margin-left: 75px;
    cursor: pointer;
`;



const MenuBox = ({Name1, Name2, Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, onClick })=>{
  return (
    <MenuContainer>

        <TopContainer> 
            <BackButton onClick={onClick}>
                <img src="/Back.png" />
            </BackButton>
            <Img src="/img-placeholder.png" width="100%" height="100%">
            </Img>
            <NameBox><h1 className="Name1">{Name1}</h1> <h1>&nbsp; &amp; &nbsp;</h1> <h1 className="Name2">{Name2}</h1></NameBox>
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
            <Logo src="/Horizontal Logo.png">
            </Logo>
        </BottomContainer>
    </MenuContainer>
)
};

MenuBox.defaultProps = {
    
};

export default MenuBox;