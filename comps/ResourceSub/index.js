import React from 'react';
import styled from 'styled-components';

const ResourceSubH = styled.div`
    width:150px;
    padding:10px;
    border:3px solid #000;
    border:${props=>props.Border ? props.Border : "5px solid #2F52E0"};
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;

    span {
        font-size:15px;
    }
`



const ResourceSub = ({text,Border}) =>{
    return <ResourceSubH border={Border}>
        <span>{text}</span>
    </ResourceSubH>
}

ResourceSub.defaultProps = {
    text:'Default',
    Border:'5px solid #2F52E0'
}

export default ResourceSub;