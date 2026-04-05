import {generateSchedule} from "../../lib/schedule-utils";
import {addDays, dateToString} from "../../lib/date-utils";

export default function ScheduleInput({dateInput, setDateInput, students, setScheduleData}) {
    function callGenerateSchedule() {
        const generatedSchedule = generateSchedule(dateInput, students);
        setScheduleData((prev) => [...prev, ...generatedSchedule]);
        setDateInput((prev) => addDays(prev, 7));
    }

    function deleteSchedule() {
        setScheduleData([]);
        setDateInput(new Date());
    }

    return (
        <form>
            <input type="date" disabled={true} value={dateToString(dateInput)}></input><br/>
            <button type="button" className="btn-green" onClick={callGenerateSchedule}>Generate schedule</button>
            <button type="button" className="btn-red" onClick={deleteSchedule}>Delete schedule</button>
        </form>
    )
}