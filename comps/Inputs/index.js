import React from 'react';
import styled from 'styled-components'

const InputWrapper = styled.div`
    width:100%;
    margin:5px 0px;
    @media screen and (max-height: 568px) {
       margin:5px 0px;
    }
`;

const InputBox = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid #1B2121;
    width:270px;
    outline:none;
    margin-bottom:20px;

`
const Label = styled.div`
    font-size: 20px;
    text-align: left;
`

const Inputs = ({ label, color, type, val, handleChange }) => {
    return <InputWrapper>
        <Label style={{ color: color }}>{label}</Label>
        <InputBox type={type} value={val} onChange={handleChange}></InputBox>
    </InputWrapper>
const Inputs = ({ label, color, type, val, handleChange, state }) => {
    return <div>
        <Label style={{ color: color }}>{label}</Label>
        <InputBox type={type} value={val} onChange={handleChange} disabled={state}></InputBox>
    </div>
}

Inputs.defaultProps = {
    label: "Default Label",
    color: "black"
}

export default Inputs;