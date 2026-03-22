export default function HistoryDialog({students, historyData, setHistoryData}) {
    // const STORAGE_KEY = "cleaning-history";

    function saveHistory(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const data = {
            index: historyData.length + 1,
            date: formData.get("date"),
            studentName: formData.get("student-name"),
            status: formData.get("status"),
            description: formData.get("description"),
        };

        // localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setHistoryData((prev) => [...prev, data]);
    }

    function loadHistory() {
        // const raw = localStorage.getItem(STORAGE_KEY);
        // return raw ? JSON.parse(raw) : [];
        // localStorage.removeItem(STORAGE_KEY);
    }

    return (
        <dialog id="dialog-history-input" className="dialog-container" popover="auto">
            <div className="dialog-header">
                <h3 className="dialog-title">Add Cleaning Duty History</h3>

                <button
                    className="dialog-close-btn"
                    popoverTarget="dialog-history-input"
                    popoverTargetAction="hide"
                >
                    X
                </button>
            </div>

            <div className="dialog-content content">
                <form className="form-input" onSubmit={saveHistory}>
                    <div className="form-input-header">Form Input</div>
                    <div className="form-input-content content">
                        <label htmlFor="date">Date</label><br/>
                        <input type="date" id="date" name="date" required={true} /><br/>

                        <label htmlFor="student-name">Student Name</label><br/>
                        <select id="student-name" name="student-name">
                            {students.map((student) => (
                                <option key={student} value={student}>{student}</option>
                            ))}
                        </select><br/>

                        <label htmlFor="status">Status</label><br/>
                        <select id="status" name="status">
                            <option value="Present">Present</option>
                            <option value="Not Present">Not Present</option>
                        </select><br/>

                        <label htmlFor="description">Description</label><br/>
                        <select id="description" name="description">
                            <option value="Clean">Clean</option>
                            <option value="Quite Clean">Quite Clean</option>
                            <option value="Very Clean">Very Clean</option>
                        </select><br/>

                        <label htmlFor="uploaded-file">Uploaded File</label><br/>
                        <input type="text" id="uploaded-file" disabled={true} />
                        <button type="button">Preview</button><br/>

                        <label htmlFor="file-name">File Name</label><br/>
                        <input type="text" id="file-name" />
                        <button type="button">Attach File</button><br/>

                        <button className="btn-green mt-1" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </dialog>
    )
}