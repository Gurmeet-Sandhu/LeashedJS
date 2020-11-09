import React from 'react';
import styled, {css} from 'styled-components';


const StackedLogoWrapper = styled.div`
   width:120px;
   height:auto;

   img{
       width:100%;
       height:auto;
   }
`;



const Stacked= () => {
    return <StackedLogoWrapper>
       <img src="Stacked.png"/>
    </StackedLogoWrapper>
}

Stacked.defaultProps = {

}


export default Stacked;