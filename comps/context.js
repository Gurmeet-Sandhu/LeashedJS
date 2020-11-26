import React, {useState} from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children}) => {

    const [tipbox, setTipbox] = useState(false);


    return (
        <MyContext.Provider value={{
            tipbox,
            setTipbox
        }}>
        {children}
        </MyContext.Provider>
    )
}

export default MyProvider