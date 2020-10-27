import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
    width: 289px; 
    height: 896px; 
    border-radius: 0px 20px 20px 0px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 12px 20px 0 rgba(0, 0, 0, 0.19);
`;

//Top Container Styles

const TopContainer = styled.div`
    width: 289px; 
    height: 319px; 
    display: flex;
    background-color: #2F52E0;
`;

const BackButton = styled.div`

`;

const Img = styled.div`

`;

const NameBox = styled.div`

`;

const EditBox = styled.div`

`;

//Bottom Container Styles

const BottomContainer = styled.div`

`;

const MenuCat = styled.div`

`;

const SmallTxt = styled.div`

`;

const Logo = styled.div`

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
            <SmallTxt></SmallTxt>
            <SmallTxt></SmallTxt>
            <SmallTxt></SmallTxt>
            <Logo></Logo>
        </BottomContainer>
    </MenuContainer>
)
};

MenuBox.defaultProps = {
    
};

export default MenuBox;