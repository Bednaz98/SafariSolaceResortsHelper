export interface Employee{
    id: number
    isManager: boolean
    fname: string
    lname: string
    username: string
    password: string
}

export interface WorkLog{
    wId: number
    type: "CHEKIN" | "CHECKOUT" 
    timestamp: number
}

export interface Reservation{
    id:string
    checkIn: number
    checkOut: number
    owner: string
    room: string
}

export interface Event{
    id: string
    title: string
    desc: string
    startTime: number
    endTime: number
    location: string
    status: "On Schedule" | "Cancelled"
}

export interface ServiceRequest{
    id: string
    room: string
    created: number
    status: "Ordered" | "Processing" | "Completed" | "Cancelled"
    requestedOffering: Offering[]
}

export interface Offering{
    desc: string
    cost: number
}

export interface ProblemSubmission{
    desc: string
    base64Photo?: string

}

export interface Problem{
    id: string
    submittedTime: number
    desc: string
    status: "Unreviewed" | "Reviewed"
    photoLink?: string
}
