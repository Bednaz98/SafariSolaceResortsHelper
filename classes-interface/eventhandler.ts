import axios from "axios";
import { useContext } from "react";
import { Event } from "./api-entities";
import { appContext } from "./app-conext";



export interface EventHandlerInterface{
    getAllEvents(): Promise<Event[]>      
    /**put -> cancel*/
    cancelEvent(id:string): Promise<Event>
    /**put -> update*/
    updateEvent(id:string, event:Event): Promise<Event>
    /**post -> create*/
    createEvent(event:Event): Promise<Event>

    getEventByID(id: string): Promise<Event>

}


export default class EventAPIHandler implements EventHandlerInterface{
    /////////////////////////////////////////////
    private useURL:string = "http://20.124.74.192:3000";
    private devMode:boolean = false;
    private IndexURL = 0;
    //private context = useContext(appContext);
    
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
        else return "https://a7168249-c922-4d0c-b90a-f3738cc27afa.mock.pstmn.io"
    }

    async getAllEvents(): Promise<Event[]> {
        const response = await axios.get(this.getURL()+"/events");
        const data:Event[] = response.data;
        return data;    
    }
    
    async cancelEvent(id:string) {
        const response = await axios.put(this.getURL()+"/events",
        {
            id:id,
            status:"Cancelled"
        });
        const data:Event = response.data;
        return data;
        }
        
    async createEvent(event:Event) {
        const response = await axios.post(this.getURL()+"/events",event);
        const data:Event = response.data;
        return data;
    }

    async getEventByID(id: string) {
        const response = await axios.get(this.getURL()+"/events/"+id);
        const data:Event = response.data;
        return data;
    }

    async updateEvent(id:string, event:Event) {
        const response = await axios.put(this.getURL()+"/events",
        {
            id:id,
            ...event
        });
        const data:Event = response.data;
        return data;
    }
        
}
