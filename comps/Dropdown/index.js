import React, {useState} from 'react';
import styled, {css} from 'styled-components';


const DropDown = styled.div`
    display:flex;
    flex-direction: column;
    `;

const TopTitle = styled.div`
    color: black;
    font-size: 20px;
    text-align: left;
    margin-bottom:10px;
`;

const Select = styled.select`
    width: 270px;
    height: 32px;
    border-radius: 20px;  
    font-size: 11px;  
    border: 3px solid #2F52E0;
    color: gray;
    display: flex;
`;

const Option = styled.option`

`;


const Drop = ({val,handleChange,Input0,Input1, Input2, Input3, Input4, Input5, Input6, Input7, Input8, Input9, Input10, Title,}) => {
    return (
            <div>
            <DropDown>
                <TopTitle>{Title}</TopTitle>
                <Select name={val} onChange={handleChange}>
                    <Option value={Input0}>{Input0}</Option>
                    <Option value={Input1}>{Input1}</Option>
                    <Option value={Input2}>{Input2}</Option>
                    <Option value={Input3}>{Input3}</Option>
                    <Option value={Input4}>{Input4}</Option>
                    <Option value={Input5}>{Input5}</Option>
                    <Option value={Input6}>{Input6}</Option>
                    <Option value={Input7}>{Input7}</Option>
                    <Option value={Input8}>{Input8}</Option>
                    <Option value={Input9}>{Input9}</Option>
                    <Option value={Input10}>{Input10}</Option>
                </Select>
            </DropDown></div>
)
};

Drop.defaultProps = {

};


export default Drop;