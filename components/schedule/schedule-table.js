import {dateToFormattedString} from "../../lib/date";

export default function ScheduleTable({scheduleData}) {
    return (
        <table style={{ width: "25rem" }}>
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
                </tr>

                {scheduleData.map((row) => (
                    <tr key={row.index}>
                        <td className="cell-number">{row.index}</td>
                        <td>{dateToFormattedString(row.date)}</td>
                        <td>{row.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}