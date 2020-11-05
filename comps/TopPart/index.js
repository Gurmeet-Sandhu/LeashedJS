import React from 'react';
import styled, {css} from 'styled-components';


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
    font-size:25pt;
    font-wight:700;
    align-text:center;
`

const TopPart= ({Pagename, TopHeight}) => {
    return <TopPartWrapper style={{height:TopHeight}}>
        <Hamburger><img src="Menu Icon.png"/></Hamburger>
        <PageName>{Pagename}</PageName>
    </TopPartWrapper>
}

TopPart.defaultProps = {
    Pagename : "default",
    TopHeight: "120px"
}


export default TopPart;