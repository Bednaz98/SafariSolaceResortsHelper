import { Event } from "../../classes-interface/api-entities"
import BasicText from "../../SafariSolaceStyleTools/basictext"

export default function FormatSingleEvent(props:{event: Event, index:number}){
    const {id,title,desc,startTime,endTime,location,status} = props.event   
    return (<>
        <BasicText text={`Event ${props.index + 1}`}/>
        <BasicText text={`id: ${id}`}/>
        <BasicText text={`title: ${title}`}/>
        <BasicText text={`description: ${desc}`}/>
        <BasicText text={`start time: ${startTime}`}/>
        <BasicText text={`end time: ${endTime}`}/>
        <BasicText text={`location: ${location}`}/>
        <BasicText text={`status: ${status} \n\n`}/>
    </>)
}