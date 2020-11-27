import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {MyContext} from '../context'

const QuizBox = styled.div`
width:100%;
min-height: 485px;
background: #fff;
border: 5px solid #F9CB40;
box-sizing: border-box;
border-radius: 25px;
display:flex;
flex-direction:column;
justify-content:center;
algin-items:center;
opacity:${props=> props.opacity ? "1" : "0"};
transform: ${props=>props.transform ? "translateY(0px)" : "translateY(100px)"};
position:absolute;
transition: 0.3s all ease;
`;


const QuizBoxTop = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex:1;
`;

const QuizTitle = styled.div`
font-size:24pt;
font-weight:bold;
margin:10px;
`;

const Closebutton = styled.div`
    margin:10px;

    img {
        width:100%;
        height:100%;
    }
`;

const QuizText = styled.div`
    text-align:center;
    font-size:20px;
    color:#000;
    flex:10;
    padding:10px;
    flex:9
`;


const Number = styled.div`
    display:inline-block;
    text-align:center;
    flex:1;
`;




const Quiz = ({ QuizHeader, QizeDesc, Pagenumber })=> {
    const context = useContext(MyContext)
    return (
        <QuizBox 
        opacity={context.quizbox}
        transform={context.quizbox}>
            <QuizBoxTop>
            <QuizTitle>{QuizHeader}</QuizTitle>
            <Closebutton
                onClick={()=> {
                    context.setQuizbox(!context.quizbox)}}>
                <img src="/closebtn_p.png" />
            </Closebutton>
            </QuizBoxTop>
            <QuizText>{QizeDesc}</QuizText>
            <Number>{Pagenumber}</Number>
        </QuizBox>
    )
    
};
    
    
  
 Quiz.defaultProps = {
    QuizHeader:'Default',
    QizeDesc:'default',
    Pagenumber:'n/n'

  };
  
  export default Quiz;