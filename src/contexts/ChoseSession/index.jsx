import { useState, useEffect, createContext, useContext } from "react";
import { getDataAtual } from "../../utils/Data";

const ChoseSessionContext = createContext()

export default function ChoseSessionProvider({children}){

    const [selectedDate, setSelectedDate] = useState({})
    useEffect(()=>{
        const dataAtual = getDataAtual()
        setSelectedDate(dataAtual)
    },[])

    
    return (
        <ChoseSessionContext.Provider value={{selectedDate, setSelectedDate}}>
            {children}
        </ChoseSessionContext.Provider>
    )
}

export const useChoseSessionContext = () => useContext(ChoseSessionContext)