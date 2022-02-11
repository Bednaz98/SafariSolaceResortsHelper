import axios from "axios";
import { useContext } from "react";
import { ServiceRequest } from "./api-entities";
import { appContext } from "./app-conext";


export enum sortType {
   Ordered ,
   Processing,
   Completed ,
   Cancelled,
   All
}

export interface RoomServiceHandlerInterface{
    /**sorting by type! All, completed, processing, ordered, canceled*/
    getAllRequest(type:sortType): Promise<ServiceRequest[]>
    markAsProcessed(id:string): Promise<ServiceRequest>
    markAsCompleted(id:string) : Promise<ServiceRequest>
}

export default class RoomServiceHandlerAPIHandler implements RoomServiceHandlerInterface{
    /////////////////////////////////////////////
    private useURL:string = "http://20.124.74.192:3000";
    private devMode:boolean = false;
    private IndexURL =0;
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
    
    async getAllRequest(type: sortType) {
        const response = await axios.get(this.getURL()+"/servicerequests");
        const data:ServiceRequest[] = response.data;
        if(type == sortType.All){
        return data;
        }else{
            let newData:ServiceRequest[] = [];
            for(let i=0; i<data.length; i++){
                if(data[i].status == sortType[type]){
                    newData.push(data[i]);
                }
            }
            return newData;
        }
    }

    async markAsProcessed(id:string) {
        const response = await axios.put(this.getURL()+"/servicerequests/"+id, {
            status: "Processing"
        });
        const data:ServiceRequest = response.data;
        return data;
    }
    async markAsCompleted(id:string) {
        const response = await axios.put(this.getURL()+"/servicerequests/"+id, {
            status: "Completed"
        });
        const data:ServiceRequest = response.data;
        return data;
    }

}


export const httpHandler1 = new  RoomServiceHandlerAPIHandler(false, 1);