import React, { useEffect, useState } from "react";
import BasicButton from "../../../STYLING-TOOLS/basicbutton";
import BasicInputText from "../../../STYLING-TOOLS/basicinputtext";
import BasicModal from "../../../STYLING-TOOLS/basicmodal";
import { Event as Evvent } from "../../../CLASSES-AND-INTERFACES/api-entities"

import BasicText from "../../../STYLING-TOOLS/basictext";
import { RenderDatePicker, RenderTimePicker } from "./event-render-time-choosers";
import UpdateAllEventsState from "./events-update-all";


export default function CreateEventOption(props:{allEvents: Evvent[], setAllEvents: Function}){

    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [date, setDate] = useState(new Date());
    const [showDateAndTime, setShowDateAndTime] = useState(false)
    const [showDatePicker, setShowDatePicker]= useState(false)
    const [showStartTimePicker, setShowStartTimePicker]= useState(false)
    const [showEndTimePicker, setShowEndTimePicker] = useState(false)
    const [startTime, setStart] = useState(()=>{let date = new Date(); if (date.getHours() > 12) {date.setHours(date.getHours()-12); return date} else{return date}})
    const [endTime, setEnd] = useState(()=>{let date = new Date(); if (date.getHours() > 12) {date.setHours(date.getHours()-12); return date} else{return date}})
    const [location, setLocation] = useState<string>("")

    useEffect(()=>{
        console.log("Date changed and is", date.getDate())
        console.log("Date changed startTime is", startTime.toDateString(), "::" , startTime.getDate())
        console.log("Date changed startTime is", startTime, "::" , startTime.getDate(), '::', startTime.getMonth()+1)
        const newDate = date.getTime() + startTime.getTime() 
    
    
    }, [date])

    function DateAndTime(){
        if (showDateAndTime){
            if(showDatePicker){
                return (<RenderDatePicker value={date} hide={()=>{setShowDatePicker(false)}} setDate={(val)=>setDate(val)}/>)
            }
            else if(showStartTimePicker){
                return (
                    <RenderTimePicker value={startTime} hide={()=>setShowStartTimePicker(false)} setTime={(val)=>setStart(val)}/>
                )
            }
            else if (showEndTimePicker )
                {return (<RenderTimePicker value={endTime} hide={()=>setShowEndTimePicker(false)} setTime={(val)=>setEnd(val)}/>)}
            else return (<></>)
        }
        else return (<></>) 
    }

    const createEventStates = {title: title, desc: desc, startTime: startTime, endTime: endTime, location: location, allEvents: props.allEvents, setAllEvents: props.setAllEvents, date: date}

    //console.log(showDatePicker)
    function InputFields(inputFieldsProps){
        return(
            <>
                <BasicInputText value={title} onChangeText={setTitle} placeholder={'title'}/>
                <BasicInputText value={desc} onChangeText={setDesc} placeholder={'description'}/>
                <BasicInputText value={location} onChangeText={setLocation} placeholder={'location'}/>
                <BasicButton onPress={()=>{setShowDatePicker(true); setShowStartTimePicker(true); setShowEndTimePicker(true); setShowDateAndTime(true); }  } title={'set date and time'}/>
                <DateAndTime/>
                <BasicText text={`Start Date: ${date.toDateString()}`}/>
                <BasicText text={`Start Time: ${startTime.toLocaleTimeString().slice(0,-3)}`}/>
                <BasicText text={`End Time: ${endTime.toLocaleTimeString().slice(0,-3)}\n\n`}/>
                <BasicButton onPress={()=>UpdateAllEventsState(inputFieldsProps)} title={'Update Event List'}/>
            </>
        )
    }

    return(
        <BasicModal child={InputFields(createEventStates)} openTitle={"Create Event"}/>
    )
}
