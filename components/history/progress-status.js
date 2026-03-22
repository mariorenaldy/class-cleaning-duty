export default function ProgressStatus({scheduleData, historyData}) {
    return (
        <div>
            <p className="mt-0 mb-0">Progress:</p>
            <p className="mt-0">{historyData.length} / {scheduleData.length} done</p>
        </div>
    );
}