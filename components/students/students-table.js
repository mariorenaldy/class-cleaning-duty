export default function StudentsTable({students}) {
    const sortedStudents = [...students].sort((a, b) => b.score - a.score);

    return (
        <div className="table-container">
            <table style={{ width: "25rem" }}>
                <colgroup>
                    <col style={{ width: "3rem" }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Contribution Score</th>
                    </tr>

                    {sortedStudents.map((row, index) => (
                        <tr key={row.index}>
                            <td className="cell-number">{index + 1}</td>
                            <td>{row.name}</td>
                            <td className="cell-number">{row.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}