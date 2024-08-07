import { createContext } from "react";


// creating a context
export const AppContext = createContext(); 

const ContextProvider = (props) => {

    const phoneNumber = "+91 123447689" 
    
    return(
        <AppContext.Provider value={phoneNumber}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider