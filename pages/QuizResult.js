import React from 'react';
import TopPart from '../comps/TopPart';
import Button from '../comps/Button';
import { useRouter } from 'next/router';

export default function QuizResult() {
    const router = useRouter()
    return (
        <div className="Background">
            <div className="TopBar">
                <TopPart
                    onClick={() => {
                        router.push('/Training')
                    }}
                    TopHeight="200px"
                    Pagename="Master The Dog Walk"
                    Stat="Your score is..."

                    icon={"/arrow_b_l.png"}
                />
            </div>
            <div className="ResultBox">
                95%
            </div>
            <div className="ResultsButtons">
                <Button
                    text="Go to Training Page"
                    bgColor="#FF715B"
                    onClick = {() => {
                        router.push('/Training')
                    }}
                />
            </div>
            <div className="ResultsButtons">
                <Button
                    text="Continue to The Next Day"
                    bgColor="white"
                />
            </div>
        </div>
    )
}