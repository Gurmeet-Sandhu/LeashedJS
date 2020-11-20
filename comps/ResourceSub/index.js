import React from 'react';
import styled from 'styled-components';

const ResourceSubH = styled.div`
    max-width: fit-content;
    margin: 10px;
    padding:10px;
    border:${props=>props.Border ? props.Border : "5px solid #2F52E0"};
    border-radius:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Mukta Mahee', Sans-serif;
    font-weight:bold;
    background-color:#fff;
    span {
        font-size:20px;
    }
`



const ResourceSub = ({text,Border}) =>{
    return <ResourceSubH style={{border:Border}}>
        <span>{text}</span>
    </ResourceSubH>
}

ResourceSub.defaultProps = {
    text:'Default',
    Border:'5px solid #2F52E0'
}

export default ResourceSub;