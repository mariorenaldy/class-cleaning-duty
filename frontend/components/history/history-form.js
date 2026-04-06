import {useState} from "react";
import FileUploadField from "../ui/file-upload-field";
import {dateToString} from "../../lib/date-utils";
import {getEarliestScheduleWithoutHistory} from "../../lib/schedule-utils";

export default function HistoryForm({scheduleData, students, historyData, setHistoryData, addStudentScore, subtractStudentScore}) {
    const [presentStatus, setPresentStatus] = useState(true);

    function validateInput(formData){
        if (scheduleData.length === 0) {
            alert("No schedule found");
            return false;
        }

        if (!formData.get("date")) {
            alert("Date is required");
            return false;
        }

        const file = formData.get("file-data");
        if (!file || file.size === 0) {
            alert("File is required");
            return false;
        }

        const earliestScheduleWithoutHistory = getEarliestScheduleWithoutHistory(scheduleData, historyData);

        if (!earliestScheduleWithoutHistory) {
            alert("No next schedule to be input");
            return false;
        }

        console.log(earliestScheduleWithoutHistory);

        const dateInput = formData.get("date");
        if (dateToString(earliestScheduleWithoutHistory.date) !== dateInput) {
            alert("Date doesn't match the next schedule to be input (must be input in order)");
            return false;
        }

        const studentInput = formData.get("student-name");
        if (earliestScheduleWithoutHistory.name !== studentInput) {
            alert("Student doesn't match with the one assigned in the schedule");
            return false;
        }

        return true;
    }

    function saveHistory(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        if (!validateInput(formData)) {
            return;
        }

        const fileData = formData.get("file-data");

        let objFile = null;
        if (fileData instanceof File) {
            objFile = URL.createObjectURL(fileData);
        }

        const studentName = formData.get("student-name");
        const status = formData.get("status");

        const data = {
            index: historyData.length + 1,
            date: formData.get("date"),
            studentName: studentName,
            status: status,
            description: formData.get("status") === "Present" ? formData.get("description") : null,
            imagePreview: objFile,
        };

        // Add or subtract score based on status
        const studentIndex = students.find(s => s.name === studentName)?.index;
        if (status === "Present") {
            addStudentScore(studentIndex, 10);
        } else {
            subtractStudentScore(studentIndex, 10);
        }

        // localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setHistoryData((prev) => [...prev, data]);
    }

    return (
        <form className="form-input" onSubmit={saveHistory}>
            <div className="form-input-header">Form Input</div>
            <div className="form-input-content content">
                <label htmlFor="date">Date</label><br/>
                <input type="date" id="date" name="date" /><br/>

                <label htmlFor="student-name">Student</label><br/>
                <select id="student-name" name="student-name">
                    {students.map((student) => (
                        <option key={student.name} value={student.name}>{student.name}</option>
                    ))}
                </select><br/>

                <label htmlFor="status">Status</label><br/>
                <select id="status" name="status" onChange={(e) => setPresentStatus(e.target.value === "Present")}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select><br/>

                {presentStatus && (
                    <div>
                        <label htmlFor="description">Description</label><br/>
                        <select id="description" name="description">
                            <option value="Clean">Clean</option>
                            <option value="Quite Clean">Quite Clean</option>
                            <option value="Very Clean">Very Clean</option>
                        </select><br/>
                    </div>
                )}

                <FileUploadField />

                <button className="btn-green mt-1" type="submit">Save</button>
            </div>
        </form>
    )
}