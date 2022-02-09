import { useContext } from "react";
import { appContext } from "./app-conext";



//employee
//problem
//room service
//event
//reservation


export interface EmployeeHandlerInterface{
    /**gets all logs for manager*/
    getWorklogs()
    clockin()
    clockout()

    login()
    logout()
    

}



class employeeAPIHandler implements EmployeeHandlerInterface{
    /////////////////////////////////////////////
    private useURL:string = "http://20.124.74.192:3000";
    private devMode:boolean = false;
    private IndexURL =0;
    private context = useContext(appContext);
    //constructor
    constructor(dev:boolean = false, IndexURL=1){
        this.devMode=dev;
        this.IndexURL=IndexURL
    }
    //////////////////////////////////////////////

    /**this function returns the URL to work with, if devMod is set to false, 
    * it will return the production URL, if true, it will return 'http//localhost:[port]'*/
    private getURL(){
        if(!this.devMode){ return this.useURL} //postman mock
        switch(this.IndexURL){
            case 0:{ return ''}
            case 1:{ return ''}
        }
    }

    getWorklogs() {
        throw new Error("Method not implemented.");
    }
    clockin() {
        throw new Error("Method not implemented.");
    }
    clockout() {
        throw new Error("Method not implemented.");
    }
    login() {
        throw new Error("Method not implemented.");
    }
    logout() {
        throw new Error("Method not implemented.");
    }



}


export const httpHandler1 = new employeeAPIHandler(false, 1);
