import { createContext } from "react";



export interface AppContextInterface{

}


export const initContext: AppContextInterface = {

}

export const appContext = createContext(initContext);