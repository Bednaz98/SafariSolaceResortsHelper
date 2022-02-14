import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Problem } from "../../classes-interface/api-entities";
import ProblemAPIHandler, { ProblemHandlerInterface } from "../../classes-interface/problemhandler";
import BasicText, { TextType } from "../../SafariSolaceStyleTools/basictext";
import ProblemItem from "../children/problem-item";

export default function ProblemView(){

    const testproblemList: Problem[] = [
        {id: "aa9cc399-a64b-4a10-b6ed-4f4aca673e9f",
        desc: "Test Problem!",
        submittedTime: 1644428469371,
        status: "Unreviewed",
        photoLink: "https://projstorage0.blob.core.windows.net/images/24026990290640815-Receipt.jpg"},
        {id: "aa9cc399-a64b-4a10-b6ed-4f4aca673e88",
        desc: "Test Problem1!",
        submittedTime: 1644428469372,
        status: "Unreviewed"}
    ]

    const [problemList, setProblemList] = useState([... testproblemList]);

    const handler: ProblemHandlerInterface = new ProblemAPIHandler(false);

    //useEffect(()=>{setter()},[]);

    async function setter(){
        const response: Problem[] = await handler.getAllProblems();
        const pendingProblems: Problem[] = response.filter(p => p.status === "Unreviewed"); 
        setProblemList(pendingProblems);
    }

    const problemItems = problemList.map(p => <ProblemItem key={p.id} {...p}/>)

    return(<View>
        <BasicText text={'Current Problems'} textType={TextType.Title}/>
        <ScrollView>
            {problemItems}
        </ScrollView>

    </View>)
}