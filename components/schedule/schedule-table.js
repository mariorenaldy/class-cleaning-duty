import {dateToFormattedString, getDayString} from "../../lib/date-utils";

export default function ScheduleTable({scheduleData}) {
    return (
        <table style={{ width: "30rem" }}>
            <colgroup>
                <col style={{ width: "3rem" }} />
                <col />
                <col />
            </colgroup>
            <tbody>
                <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Student</th>
                </tr>

                {scheduleData.map((row, index) => (
                    <tr key={index}>
                        <td className="cell-number">{index + 1}</td>
                        <td>{dateToFormattedString(row.date)}</td>
                        <td>{getDayString(row.date)}</td>
                        <td>{row.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}