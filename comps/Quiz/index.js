import React, {useContext, useEffect, useState} from 'react';
import { useRouter, UseRouter } from 'next/router';
import styled from 'styled-components';
import {MyContext} from '../context';
import Button3 from '../Button3';
import { object } from 'prop-types';

const QuizBox = styled.div`
width: 100%;
min-height: 322px;
background: #fff;
border: 5px solid #F9CB40;
box-sizing: border-box;
border-radius: 25px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
opacity:${props=> props.opacity ? "1" : "0"};
transform: ${props=>props.transform ? "translateY(0px)" : "translateY(120px)"};
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




const Quiz = ({ QuizHeader,  Pagenumber, Answer1, Answer2, Answer3, Answer4, Answer5, Answer6, })=> {
    const router = useRouter();
    const context = useContext(MyContext)
    const questions =  [
        {
			questionText: 'Is rocky Cool ',
			answerOptions: [
				{ answerText: 'True', isCorrect:  false},
				{ answerText: 'False', isCorrect: true},
            ],
        },
        {
			questionText: 'Is rocky lame',
			answerOptions: [
				{ answerText: 'True', isCorrect:  true},
				{ answerText: 'False', isCorrect: false},
            ],
        },
        {
			questionText: 'Is rocky ugly',
			answerOptions: [
				{ answerText: 'True', isCorrect:  true},
				{ answerText: 'False', isCorrect: false},
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
            alert( "Your Score is" + JSON.stringify(score, null, 2));
            router.push({
                pathname:"/QuizResult",
            });
		}
	};
    return <QuizBox 
        opacity={context.quizbox}
        transform={context.quizbox}>
            <QuizBoxTop>
            <QuizTitle><span>Question {currentQuestion + 1}</span>/{questions.length}</QuizTitle>
            <Closebutton
                onClick={()=> {
                    context.setQuizbox(!context.quizbox)}}>
                <img src="/closebtn_p.png" />
            </Closebutton>
            </QuizBoxTop>
            <QuizText>{questions[currentQuestion].questionText}</QuizText>
            <BtnWrapper>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}

            </BtnWrapper>
        </QuizBox>
    
     
};
    
    
  
 Quiz.defaultProps = {
    QuizHeader:'Default',
    QizeDesc:'default',
    Pagenumber:'n/n'

  };
  
  export default Quiz;