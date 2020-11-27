import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {MyContext} from '../context'
import Button3 from '../Button3';

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
align-items:center;
opacity:${props=> props.opacity ? "1" : "0"};
transform: ${props=>props.transform ? "translateY(0px)" : "translateY(100px)"};
position:absolute;
transition: 0.3s all ease;
`;


const QuizBoxTop = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex:1;
    max-height:90vh;
    overflow:scroll;

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
    flex:7
`;

const BtnWrapper = styled.div`
    display:flex;
    width:90%;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    .answer-btn{
        margin:4px;
    }
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
            <BtnWrapper>
                <div className="answer-btn">
                    <Button3 
                        text={"True"}
                        border={"3px solid #FF715B"}
                        />
                </div>
                <div className="answer-btn">
                    <Button3
                        text={"False"}
                        border={"3px solid #2F52E0"}
                        />
                </div>

            </BtnWrapper>
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