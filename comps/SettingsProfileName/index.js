import React from 'react';
import styled from 'styled-components';

const SettingsTitleText = styled.div`
    font-weight: 800;
    font-size: 30px;
`;

const SettingsProfileName = ({title}) =>{
    return <SettingsTitleText>
        {title}
    </SettingsTitleText>
};

SettingsProfileName.defaultProps = {
    title:"Default Name",
};


export default SettingsProfileName;