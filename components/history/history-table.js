import HistoryDialog from "./history-dialog";
import {dateToFormattedString} from "../../lib/date";

export default function HistoryTable({students, historyData, setHistoryData}) {
    function deleteHistories() {
        setHistoryData([]);
    }

    return (
        <div className="table-container">
            <div className="table-header">
                <button className="btn-green" type="button" popoverTarget="dialog-history-input">+ Add</button>
            </div>
            <HistoryDialog students={students} historyData={historyData} setHistoryData={setHistoryData} />
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
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="table-footer">
                <button className="btn-red" type="button" onClick={deleteHistories}>Delete</button>
            </div>
        </div>
    );
}