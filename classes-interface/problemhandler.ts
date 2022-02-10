import axios from "axios";
import { useContext } from "react";
import { Problem } from "./api-entities";
import { appContext } from "./app-conext";

export interface ProblemHandlerInterface{
    getAllProblems():Promise <Problem>

    getByProblemID(id:string) : Promise<Problem>

    markReviewed(id:string, status:string) : Promise<Problem>
}

export default class ProblemAPIHandler implements ProblemHandlerInterface{
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
    async getAllProblems() {
        const response = await axios.get(this.getURL()+"/problems");
        const data:Problem = response.data;
        return data;    
    }

    async getByProblemID(id:string) {
        const response = await axios.get(this.getURL()+"/problems/"+id);
        const data:Problem = response.data;
        return data;    
    }

    async markReviewed(id:string, status:string) {
        const response = await axios.put(this.getURL()+"/problems/"+id,
        {
            id:id,
            status:status
        });
        const data:Problem = response.data;
        return data;
    }



}


export const httpHandler1 = new ProblemAPIHandler(false, 1);