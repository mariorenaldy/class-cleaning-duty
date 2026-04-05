import {getEarliestScheduleWithoutHistory} from "../../lib/schedule-utils";

export default function ScheduleInfo({students, scheduleData, historyData}) {
    function getStudent() {
        const earliestScheduleWithoutHistory = getEarliestScheduleWithoutHistory(scheduleData, historyData);
        if(!earliestScheduleWithoutHistory){
            return "-";
        }

        return earliestScheduleWithoutHistory.name;
    }

    return (
        <div>
            <p className="mb-0">Number of students in the class: {students.length}</p>
            <p className="mt-0">Students on duty today: {getStudent()}</p>
        </div>
    )
}