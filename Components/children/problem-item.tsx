import { Problem } from "../../CLASSES-AND-INTERFACES/api-entities";
import ProblemAPIHandler, { ProblemHandlerInterface } from "../../CLASSES-AND-INTERFACES/problemhandler";
import BasicButton from "../../STYLING-TOOLS/basicbutton";
import BasicModal from "../../STYLING-TOOLS/basicmodal";
import BasicText from "../../STYLING-TOOLS/basictext";

export default function ProblemItem(props: Problem){

    const {id, desc, submittedTime, status, photoLink} = props;

    const handler: ProblemHandlerInterface = new ProblemAPIHandler();

    function setReviewed(){
        handler.markReviewed(id, "Reviewed");
    }

    function renderPage(){
        return(<>
            <BasicText text={`Description: ${desc}`}/>
            <BasicText text={`Time Submitted: ${submittedTime}`}/>
            <BasicText text={`Status: ${status}`}/>
            {photoLink ? <BasicButton onPress={()=>{window.location.href=photoLink}} title={"Download Photo"}/> : <BasicText text={"No uploaded image..."}/>}
            <BasicButton onPress={setReviewed} title={"Mark as reviewed"}/>
        </>)
    }

    return(<>
        <BasicModal child={renderPage()} openTitle={desc}/>
    </>)
}