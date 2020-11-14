import React from 'react';
import styled from 'styled-components';

const ParaCont = styled.p`
    width: 343px;
    font-size:20px;

`
const Paragraphs = ({content}) =>{
    return <ParaCont>
        {content}
    </ParaCont>
}

Paragraphs.defaultProps = {
    content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
}

export default Paragraphs;