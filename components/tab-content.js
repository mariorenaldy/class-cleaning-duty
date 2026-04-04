import ScheduleInput from "./schedule/schedule-input";
import ScheduleTable from "./schedule/schedule-table";
import HistoryTable from "./history/history-table";
import ProgressStatus from "./history/progress-status";
import StudentsTable from "./students/students-table";

export default function TabContent({selectedTab, dateInput, students, scheduleData, setScheduleData, historyData, setHistoryData, addStudentScore, subtractStudentScore}) {
    if (selectedTab === 'Schedule') {
        return (
            <div className="content tab-content">
                <ScheduleInput dateInput={dateInput} students={students} setScheduleData={setScheduleData} />
                <ScheduleTable scheduleData={scheduleData} />
            </div>
        );
    }
    else if (selectedTab === 'History') {
        return (
            <div className="content tab-content">
                <ProgressStatus scheduleData={scheduleData} historyData={historyData} />
                <HistoryTable students={students} historyData={historyData} setHistoryData={setHistoryData} addStudentScore={addStudentScore} subtractStudentScore={subtractStudentScore} />
            </div>
        );
    }
    else if (selectedTab === 'Students') {
        return (
            <div className="content tab-content">
                <StudentsTable students={students} />
            </div>
        );
    }
}