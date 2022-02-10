

import { useContext } from "react";
import { appContext } from "./app-conext";



//employee
//problem
//room service
//event
//reservation


export interface EventHandlerInterface{
    getAllEvents()
    /**put -> cancel*/
    cancelEvent()
    /**post -> create*/
    createEvent()
    getEventByID()

}



export class EventAPIHandler implements EventHandlerInterface{
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

    getAllEvents() {
        throw new Error("Method not implemented.");
    }
    cancelEvent() {
        throw new Error("Method not implemented.");
    }
    createEvent() {
        throw new Error("Method not implemented.");
    }
    getEventByID() {
        throw new Error("Method not implemented.");
    }



}


export const httpHandler1 = new  EventAPIHandler(false, 1);