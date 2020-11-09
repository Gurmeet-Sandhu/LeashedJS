import React from 'react';
import styled, {css} from 'styled-components';


const LogoWrapper = styled.div`
   width:100px;
   height:auto;

   img{
       width:100%;
       height:auto;
   }
`;



const Logo= () => {
    return <LogoWrapper>
       <img src="Logo.png"/>
    </LogoWrapper>
}

Logo.defaultProps = {

}


export default Logo;