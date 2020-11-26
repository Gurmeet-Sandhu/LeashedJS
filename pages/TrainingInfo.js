import React, {useState, useContext} from 'react';
import {useRouter} from 'next/router';
import TopPart from '../comps/TopPart';
import Paragraphs from '../comps/Paragraphs';
import TipBox from '../comps/Tips';
import Button from '../comps/Button';
import TipsButton from '../comps/ButtonTips';
import {MyContext} from '../comps/context';

export default function TrainingInfo() {
    const router = useRouter()
    const context = useContext(MyContext)

    return (
        <div className="Background InfoWrapper">
        <div className="TopBar">
            <TopPart 
                    onClick={()=>{
                        router.push('/Training')
                    }}
                    TopHeight="200px"
                    Pagename="Master The Dog Walk"
                    Stat="You are on: Day 1"
                    textSize="30px"
                    bgColor="#2F52E0"
                    color="#fff"

                    icon={"/Back.png"}
                    />
        </div>

        <div className="InfoSection">
            <div className="VideoSection">
                
            </div> 
            <div className="TipBtn">
                <TipsButton onClick={()=> {
                    context.setTipbox(!context.tipbox)
                }}/>
            </div> 
        </div>

        <div className="TipBox">
            <TipBox/>
        </div>

        <div className="trainingDesc">
                <Paragraphs 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
        </div>
    
        <div className="QuizButton" >
                <Button 
                    text="Ready? Take the Quiz!"
                    bgColor="#FF715B"
                />
        </div> 
                    
        </div>
    )
  }