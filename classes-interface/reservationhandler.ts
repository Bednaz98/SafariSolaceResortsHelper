import axios from "axios";
import { useContext } from "react";
import { Reservation } from "./api-entities";
import { appContext } from "./app-conext";

export interface ReservationHandlerInterface{
    getAllReservations():Promise <Reservation>
    getReservationByID(id:string):Promise <Reservation>
}

class   ReservationAPIHandler implements  ReservationHandlerInterface{
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

    async getAllReservations() {
        const response = await axios.get(this.getURL()+"/reservations");
        const data:Reservation = response.data;
        return data;    
    }
    async getReservationByID(id:string) {
        const response = await axios.get(this.getURL()+"/reservations/"+id);
        const data:Reservation = response.data;
        return data;    
    }



}


export const httpHandler1 = new  ReservationAPIHandler(false, 1);