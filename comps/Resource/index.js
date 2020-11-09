import React from 'react';
import styled from 'styled-components';

const ResourceBox = styled.div`
    width:90%;
    border:1px solid #D7D7D7;
    border-radius:20px;

    div {
        padding: 8px 0px;
        padding-left:20px;
        border-bottom:1px solid #D7D7D7;
    }

    .last {
        border-bottom:none;
    }
`;

const Resource= ({breed}) =>{
    return <ResourceBox>
        <div>Learn about {breed}!</div>
        <div>What is Adaptability?</div>
        <div>Trainability of {breed} </div>
        <div>Know the personality</div>
        <div>Physical Needs?</div>
        <div className="last">Get health advice!</div>
    </ResourceBox>
}

Resource.defaultProps = {
    breed:'default breed',
}

export default Resource;