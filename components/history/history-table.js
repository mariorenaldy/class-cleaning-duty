import HistoryDialog from "./history-dialog";
import {dateToFormattedString} from "../../lib/date";
import ImagePreviewDialog from "../ui/image-preview-dialog";
import {useRef, useState} from "react";

export default function HistoryTable({students, historyData, setHistoryData}) {
    const [showPreview, setShowPreview] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const dialogRef = useRef(null);

    function deleteHistories() {
        setHistoryData([]);
    }

    function showPreviewDialog(image) {
        setImagePreview(image);
        if (!showPreview) {
            setShowPreview(true);
        }
    }

    function showHistoryDialog() {
        dialogRef.current?.showModal();
    }

    return (
        <div className="table-container">
            <div className="table-header">
                <button className="btn-green" type="button" onClick={showHistoryDialog}>+ Add</button>
            </div>
            <table style={{ width: "50rem" }}>
                <colgroup>
                    <col style={{ width: "3rem" }} />
                    <col />
                    <col />
                </colgroup>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Preview</th>
                    </tr>

                    {historyData.map((row) => (
                        <tr key={row.index}>
                            <td className="cell-number">{row.index}</td>
                            <td>{dateToFormattedString(row.date)}</td>
                            <td>{row.studentName}</td>
                            <td>{row.status}</td>
                            <td>{row.description}</td>
                            <td className="cell-button"><button className="btn-orange" onClick={() => showPreviewDialog(row.imagePreview)}>👁</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <button className="btn-red" type="button" onClick={deleteHistories}>Delete</button>
            </div>

            {showPreview && (
                <ImagePreviewDialog imagePreview={imagePreview} setShowPreview={setShowPreview} />
            )}

            <HistoryDialog dialogRef={dialogRef} students={students} historyData={historyData} setHistoryData={setHistoryData} />
        </div>
    );
}