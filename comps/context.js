import React, {useState} from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children}) => {

    const [tipbox, setTipbox] = useState(false);
    const [quizbox, setQuizbox] = useState(false);

    return (
        <MyContext.Provider value={{
            tipbox,
            setTipbox,
            quizbox,
            setQuizbox
        }}>
        {children}
        </MyContext.Provider>
    )
}

export default MyProvider