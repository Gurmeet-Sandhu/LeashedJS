import React, {useState} from 'react';
import TopPart from '../comps/TopPart';
import Paragraphs from '../comps/Paragraphs';
import TipBox from '../comps/Tips';
import Button from '../comps/Button';
import {useRouter} from 'next/router';

export default function TrainingInfo() {
    const router = useRouter()
    return (
        <div className="Background">
        <div className="TopBar">
            <TopPart 
                    TopHeight="258px"
                    Pagename="Master The Dog Walk"
                    Stat="Day 1"
                    icon={"/arrow_b_l.png"}
                    onClick={()=>{
                        router.push('/Training2')
                    }}
                    />
        </div>
        <div className="InfoSection">
            <div className="VideoSection">
                
                </div> 
            <div className="Tips">
                
                </div> 
            <div className="InfoBox">
                <Paragraphs 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                </div> 
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