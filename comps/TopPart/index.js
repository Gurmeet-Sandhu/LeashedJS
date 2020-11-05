import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import MenuBox from '../../comps/Menu';


const TopPartWrapper = styled.div`
    width:100%;
    height:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0px;
    border-radius:0 0 25px 25px;
    background-color:#F9CB40;
    position:relative;

`;

const Hamburger = styled.div `
    width:9%;
    position:absolute;
    top:15px;
    left:15px;

    img {
        width:100%;
        height:auto;
    }
`

const PageName = styled.div `
    display:inline-flex;
    font-size:40px;
    font-wight:700;
    align-text:center;
`

const MenuWrapper = styled.div`
    position:absolute;
    z-index:99;
    left:${props=>props.openMenu ? "0px" : "-320px"};
    top:0;
    transition:0.2s all ease;
`;

const DogName = styled.div`
    font-size: 30px;
`;


const Status = styled.div`
    font-size: 25px;
    font-weight: lighter;
`;

const TopText = styled.div`
`;

const TopPart= ({Pagename, TopHeight, DName, Stat,}) => {
    const [expanded, setExpanded] = useState(false);
    return <TopPartWrapper style={{height:TopHeight}}>
        <Hamburger onClick={()=>{
            setExpanded(!expanded);
        }
        }><img src="Menu Icon.png"/></Hamburger>
            <TopText>
                <PageName>{Pagename}</PageName>
                <DogName>{DName}</DogName>
                <Status>{Stat}</Status>
            </TopText>
        <MenuWrapper openMenu={expanded}><MenuBox  
            Name1="Emma"
            Name2="Humprey"
            Menu1="Home"
            Menu2="Training"
            Menu3="Achievement"
            Menu4="Resources"
            Menu5="Team Discord"
            Menu6="Contact Us"
            Menu7="Policy"
            onClick={()=>{
            setExpanded(!expanded);
        }
        }/>
        </MenuWrapper>
    </TopPartWrapper>
    
}

TopPart.defaultProps = {
    Pagename : "default",
    TopHeight: "120px"
}


export default TopPart;