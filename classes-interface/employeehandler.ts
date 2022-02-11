import axios from "axios";
import { useContext } from "react";
import { Employee, WorkLog } from "./api-entities";
import { appContext } from "./app-conext";

export interface EmployeeHandlerInterface{
    /**gets all logs for manager*/
    getWorklogs(): Promise<WorkLog>

    getWorklogByID(id:number): Promise<WorkLog>

    clockin(wId:number , type: string ): Promise<WorkLog>
    
    clockout(wId:number , type: string): Promise<WorkLog>
    
    login(username:string, password:string): Promise<Employee>
    

}


export default class employeeAPIHandler implements EmployeeHandlerInterface{
    /////////////////////////////////////////////
    private useURL:string = "http://20.124.74.192:3000";
    private devMode:boolean = false;
    private IndexURL =0;
    /* private context = useContext(appContext); */
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
        else return "https://d52f8991-f077-4c37-a337-e3679d255a88.mock.pstmn.io"
    }

    async getWorklogs() {
        const response = await axios.get(this.getURL()+"/worklogs");
        const data:WorkLog = response.data;
        return data;    
    }

    async getWorklogByID(id:number) {
        const response = await axios.get(this.getURL()+"/worklogs/"+id);
        const data:WorkLog = response.data;
        return data;    
    }
    
    async clockin(wId:number , type: string) {
        const response = await axios.post(this.getURL()+"/worklogs",{
            wId:wId,
            type:type
        });
        const data:WorkLog = response.data;
        return data;    
    }

    async clockout(wId:number , type: string) {
        const response = await axios.post(this.getURL()+"/worklogs",{
            wId:wId,
            type:type
        });
        const data:WorkLog = response.data;
        return data;    
    }

    async login(username:string, password:string) {
        try {
            const response = await axios.patch(this.getURL()+"/login",{
                username:username,
                password:password
            });
            const data:Employee = response.data;
            return data;
        } catch (error) {
            console.log("Login failed");
        }
}

}


