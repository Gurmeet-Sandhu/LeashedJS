import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.button`
    width: 289px; 
    height: 896px; 
    border-radius: 0px 20px 20px 0px;
    display: flex;


`;

//Top Container Styles

const TopContainer = styled.button`

`;

const BackButton = styled.button`

`;
const BackButton = styled.button`

`;


const MenuBox = ({Name1, Name2, Menu1, Menu2, Menu3, Menu4 })=>{
  return (
    <MenuContainer>

        <TopContainer> 
            <BackButton></BackButton>
            <Img></Img>
            <NameBox><h1>{Name1} and {Name2}</h1></NameBox>
            <EditBox></EditBox>
        </TopContainer>
        <BottomContainer> 
            <MenuCat>{Menu1}</MenuCat>
            <MenuCat>{Menu2}</MenuCat>
            <MenuCat>{Menu3}</MenuCat>
            <MenuCat>{Menu4}</MenuCat>
            <smallTxt></smallTxt>
            <smallTxt></smallTxt>
            <smallTxt></smallTxt>
            <Logo></Logo>
        </BottomContainer>
    </MenuContainer>
)
};

MenuBox.defaultProps = {
    
};

export default MenuBox;