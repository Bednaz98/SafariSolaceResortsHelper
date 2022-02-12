import React, { useEffect, useState } from "react";
import BasicButton from "../../SafariSolaceStyleTools/basicbutton";
import BasicInputText from "../../SafariSolaceStyleTools/basicinputtext";
import BasicModal from "../../SafariSolaceStyleTools/basicmodal";
import { Event as Evvent } from "../../classes-interface/api-entities"
import UpdateAllEventsState from "./update-allEvents-state";
import BasicText from "../../SafariSolaceStyleTools/basictext";
import {RenderDatePicker, RenderTimePicker } from "./event-date-and-time-picker";

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
    const [startAntePost, setStartAntePost] = useState("PM")
    const [endAntePost, setEndAntePost] = useState("PM")
    const [location, setLocation] = useState<string>("")

    function formattedStartTime(time: Date){
        const hours = time.getHours()

        if (hours < 1 || hours > 12){
            time.setHours(time.getHours() -12)
        }

        if (hours < 12) setStartAntePost('AM')
        else setStartAntePost("PM")
        const formattedTime = time.toLocaleTimeString().slice(0,-3)
        return(`${formattedTime} ${startAntePost}`)
    }

    function formattedEndTime(time: Date){
        const hours = time.getHours()
        if (hours < 1 || hours > 12){
            time.setHours(time.getHours() -12)
            setEnd(time || startTime)
        }
        else{
            setEnd(time || startTime)
        }

        if (hours < 12) setEndAntePost('AM')
        else setEndAntePost("PM")

    }

    function DateAndTime(){
        if (showDateAndTime){
            if(showDatePicker){
                return (<RenderDatePicker value={date} hide={()=>{setShowDatePicker(false)}} setDate={()=>setDate(date)}/>)
            }
            else if(showStartTimePicker){
                return (
                    <RenderTimePicker value={startTime} hide={()=>setShowStartTimePicker(false)} setTime={()=>setStart(startTime)}/>
                )
            }
            else if (showEndTimePicker )
                {return (<RenderTimePicker value={endTime} hide={()=>setShowEndTimePicker(false)} setTime={()=>setEnd(startTime)}/>)}
            else return (<></>)
        }
        else return (<></>) 
    }

    const createEventStates = {title: title, desc: desc, startTime: startTime, endTime: endTime, location: location, allEvents: props.allEvents, setAllEvents: props.setAllEvents, startAntePost: startAntePost, endAntePost: endAntePost}

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
