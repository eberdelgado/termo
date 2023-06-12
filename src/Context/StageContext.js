import { createContext, useState } from "react";
export const StageContext = createContext();

export const StageContextProvider=({children})=>{
    const [stage, setStage]=useState("home");
    return (
        <StageContext.Provider value={{stage,setStage}}>
            {children}
        </StageContext.Provider>
    )

}