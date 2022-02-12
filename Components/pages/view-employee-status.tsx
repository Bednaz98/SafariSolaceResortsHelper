import { useEffect, useState } from "react"
import { View } from "react-native"
import { Employee, WorkLog } from "../../classes-interface/api-entities"
import employeeAPIHandler, { EmployeeHandlerInterface } from "../../classes-interface/employeehandler"
import BasicText from "../../SafariSolaceStyleTools/basictext"
import { GetDateFromNum } from "../children/date-formatting"

export default function ViewEmployeeStatus(){
    //get employee statuses
    //prepare render list worklogs
    const handler: EmployeeHandlerInterface = new employeeAPIHandler(true)
    const [worklogsState, setWorkLogs] = useState<WorkLog[]>([])
    useEffect(()=>{GetWorkLogs()}, [])

    async function GetWorkLogs(){
        //const worklogs = await handler.getWorklogs()
        //console.log(worklogs)
        //setWorkLogs(worklogs)
        const dummyWorklogs: WorkLog[] = [{wId: 123, type: 'CHECKOUT', timestamp: 1230}, {wId: 456, type: 'CHEKIN', timestamp: 9994063236}]
        setWorkLogs(dummyWorklogs)
    }

    function LinkEmployee(worklogID: number){
        const dummyEmployee: Employee[] = [{id: 123,isManager: false,fname: 'dude',lname: 'bro',username: 'yoyoyo',password: 'hmm'}]
        const employee: Employee = dummyEmployee.find((employee)=>{return(employee.id === worklogID)}) //must have return in order to work
        //console.log("employee", employee)
        if(!employee) return "no name found" //in case no match is made
        else return(employee.fname)
    }

    function PreparedWorkLogs(){
        console.log('worklog state',worklogsState)
        const loglist = worklogsState.map((worklog, key)=>{return<BasicText key={key} text={`NAME: ${LinkEmployee(worklog.wId)}\nSTATUS: ${worklog.type}\nTIMESTAMP: ${GetDateFromNum(worklog.timestamp)}\n\n`}/>})
        //console.log(loglist)
        return (<View>{loglist}</View>)
    }

    return(<>  
        <BasicText text={'EMPLOYEE WORK LOGS\n\n'}/>
        <PreparedWorkLogs/>
    </>)
}