import { useContext } from "react";
import { appContext } from "./app-conext";



//employee
//problem
//room service
//event
//reservation


export interface RoomServiceHandlerInterface{
    /**sorting by type! All, completed, processing, ordered, canceled*/
    getAllRequest(type)
    markAsProcessed()
    markAsCompleted()
}



class   RoomServiceHandlerAPIHandler implements RoomServiceHandlerInterface{
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
    
    getAllRequest(type: any) {
        throw new Error("Method not implemented.");
    }
    markAsProcessed() {
        throw new Error("Method not implemented.");
    }
    markAsCompleted() {
        throw new Error("Method not implemented.");
    }



}


export const httpHandler1 = new  RoomServiceHandlerAPIHandler(false, 1);