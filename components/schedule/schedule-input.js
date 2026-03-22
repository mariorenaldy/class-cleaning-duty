import {generateSchedule} from "../../lib/schedule-generator";
import {dateToString} from "../../lib/date";

export default function ScheduleInput({dateInput, students, setScheduleData}) {
    function callGenerateSchedule() {
        const generatedSchedule = generateSchedule(dateInput, students);
        setScheduleData(generatedSchedule)
    }

    function deleteSchedule() {
        setScheduleData([]);
    }

    return (
        <form>
            <input type="date" disabled={true} value={dateToString(dateInput)}></input><br/>
            <button type="button" className="btn-green" onClick={callGenerateSchedule}>Generate schedule</button>
            <button type="button" className="btn-red" onClick={deleteSchedule}>Delete schedule</button>
        </form>
    )
}