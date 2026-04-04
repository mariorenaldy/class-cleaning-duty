import HistoryForm from "./history-form";
import {useRef} from "react";

export default function HistoryDialog({dialogRef, students, historyData, setHistoryData, addStudentScore, subtractStudentScore}) {
    // const STORAGE_KEY = "cleaning-history";
    const mouseDownOutsideDialogRef = useRef(false);

    function loadHistory() {
        // const raw = localStorage.getItem(STORAGE_KEY);
        // return raw ? JSON.parse(raw) : [];
        // localStorage.removeItem(STORAGE_KEY);
    }

    function closeDialog() {
        dialogRef.current?.close();
    }

    function isInsideDialog(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        return (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
        );
    }

    function onMouseDown(e) {
        mouseDownOutsideDialogRef.current = !isInsideDialog(e);
    }

    function onMouseUp(e) {
        const mouseUpOutsideDialog = !isInsideDialog(e);
        if (mouseDownOutsideDialogRef.current && mouseUpOutsideDialog) {
            closeDialog();
        }
        mouseDownOutsideDialogRef.current = false;
    }

    return (
        <dialog id="dialog-history-input" className="dialog-container" ref={dialogRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
            <div className="dialog-header">
                <h3 className="dialog-title">Add Cleaning Duty History</h3>

                <button
                    className="dialog-close-btn"
                    type="button"
                    onClick={closeDialog}
                >
                    X
                </button>
            </div>

            <div className="dialog-content content">
                <HistoryForm students={students} historyData={historyData} setHistoryData={setHistoryData} addStudentScore={addStudentScore} subtractStudentScore={subtractStudentScore} />
            </div>
        </dialog>
    )
}