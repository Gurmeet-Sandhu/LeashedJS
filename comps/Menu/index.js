import React, {useState} from 'react';
import styled from 'styled-components';
import Stacked from '../../comps/StackedLogo';
import Link from 'next/link';

const MenuContainer = styled.div`
    width:300px;
    max-width:500px; 
    height: 100vh; 
    border-radius: 0px 20px 20px 0px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: 'Poppins', sans-serif;
    background-color: white;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

//Top Container Styles

const TopContainer = styled.div`
    width: 100%; 
    display: flex;
    border-radius: 0px 20px 0px 0px;
    background-color: #2F52E0;
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    position:relative;
`;

const BackButton = styled.div`
    width: 50px; 
    height: 50px;
    cursor: pointer;
    position:absolute;
    top:20px;
    left:15px;
`;

const Img = styled.img`
    margin:20px 0px;
    width: 184px; 
    height: 184px;
    border-radius: 25px;

`;

const NameBox = styled.div`
    font-size: 13px;
    color: #fff;
    display: flex; 
    .Name1 {
        color:#F9CB40;
        
    }
    .Name2 {
        color:#FF715B;
    }
`;

const EditBox = styled.a`
    font-weight: lighter;
    color: #fff;
    cursor: pointer;
    margin-bottom:10px;
`;

//Bottom Container Styles

const BottomContainer = styled.div`
    display: flex;
    border-radius: 0px 20px 0px 0px;
    display: flex; 
    flex-direction: column;

    .mainmenu {
        margin-left:20px;
        display:flex;
        flex-direction:column;
    }

    .submenu {
        margin-left:20px;
    }
`;


const MenuCat = styled.a`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    margin: 20px 0px;

`;

const SmallTxt = styled.div`
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    color: #1B2121;
    opacity: 0.8;
    cursor: pointer;
    margin: 10px 0px;
`;


const LogoBox = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
`


const MenuBox = ({Name1, Name2, Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, onClick })=>{
  return (
    <MenuContainer>

        <TopContainer> 
            <BackButton onClick={onClick}>
                <img src="/Back.png" />
            </BackButton>
            <Img src="/profile.png" width="100%" height="100%">
            </Img>
            <NameBox><h1 className="Name1">{Name1}</h1> <h1>&nbsp; &amp; &nbsp;</h1> <h1 className="Name2">{Name2}</h1></NameBox>
            <Link href="/Settings"><EditBox>Edit Profile</EditBox></Link>
        </TopContainer>

        <BottomContainer> 
            <div className="mainmenu">
            <Link href="/Home"><MenuCat>{Menu1}</MenuCat></Link>
            <Link href="/Training"><MenuCat>{Menu2}</MenuCat></Link>
            <Link href="#"><MenuCat>{Menu3}</MenuCat></Link>
            <Link href="Resources"><MenuCat>{Menu4}</MenuCat></Link>
            </div>
            <div className="submenu">
            <SmallTxt>{Menu5}</SmallTxt>
            <SmallTxt>{Menu6}</SmallTxt>
            <SmallTxt>{Menu7}</SmallTxt>
            </div>
        </BottomContainer>
        
        <LogoBox>
            <Stacked/>
        </LogoBox>
    </MenuContainer>
)
};

MenuBox.defaultProps = {
    
};

export default MenuBox;