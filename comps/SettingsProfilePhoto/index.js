import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.img`
    width: 226px; 
    height: 226px;
    border-radius: 25px;
`
const SettingsProfilePhoto = () =>{
    return <ImageContainer 
    src="/profile.png" width="100%" height="100%">       
    </ImageContainer>
}

SettingsProfilePhoto.defaultProps = {
    
};


export default SettingsProfilePhoto;