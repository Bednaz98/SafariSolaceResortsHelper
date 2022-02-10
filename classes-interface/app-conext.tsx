import { createContext } from "react";
import { Employee } from "./api-entities";



export interface AppContextInterface{
    clockStatus:boolean
    setClockStatus:React.Dispatch<React.SetStateAction<boolean>>
    user:Employee
    setUser:React.Dispatch<React.SetStateAction<Employee>>

}


export const initContext: AppContextInterface = {
    clockStatus: false,
    setClockStatus: ()=>{},
    user: undefined,
    setUser: ()=>{}
}

export const appContext = createContext(initContext);