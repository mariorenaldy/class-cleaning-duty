import {dateToLocalString} from "../lib/date";

export default function ScheduleTable({scheduleData}) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>No.</th>
                    <th>Date</th>
                    <th>Name</th>
                </tr>

                {scheduleData.map((row) => (
                    <tr key={row.index}>
                        <td className="cell-number">{row.index}</td>
                        <td>{dateToLocalString(row.date)}</td>
                        <td>{row.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}