import {useState} from "react";
import FileUploadField from "../ui/file-upload-field";

export default function HistoryForm({students, historyData, setHistoryData}) {
    const [presentStatus, setPresentStatus] = useState(true);

    function saveHistory(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const fileData = formData.get("file-data");

        let objFile = null;
        if (fileData instanceof File) {
            objFile = URL.createObjectURL(fileData);
        }

        const data = {
            index: historyData.length + 1,
            date: formData.get("date"),
            studentName: formData.get("student-name"),
            status: formData.get("status"),
            description: formData.get("status") === "Present" ? formData.get("description") : null,
            imagePreview: objFile,
        };

        // localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setHistoryData((prev) => [...prev, data]);
    }

    return (
        <form className="form-input" onSubmit={saveHistory}>
            <div className="form-input-header">Form Input</div>
            <div className="form-input-content content">
                <label htmlFor="date">Date</label><br/>
                <input type="date" id="date" name="date" required={false} /><br/>

                <label htmlFor="student-name">Student Name</label><br/>
                <select id="student-name" name="student-name">
                    {students.map((student) => (
                        <option key={student} value={student}>{student}</option>
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