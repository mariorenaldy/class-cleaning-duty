export default function Tabs({selectedTab, setSelectedTab}) {
    function selectSchedule() {
        setSelectedTab('Schedule');
    }

    function selectHistory() {
        setSelectedTab('History');
    }

    function selectStudents() {
        setSelectedTab('Students');
    }

    return (
        <div style={{marginBottom : "0"}}>
            <button className={selectedTab === "Schedule" ? "btn-tab-active" : "btn-tab-inactive"} type="button" onClick={selectSchedule}>Schedule</button>
            <button className={selectedTab === "History" ? "btn-tab-active" : "btn-tab-inactive"} type="button" onClick={selectHistory}>History</button>
            <button className={selectedTab === "Students" ? "btn-tab-active" : "btn-tab-inactive"} type="button" onClick={selectStudents}>Students</button>
        </div>
    )
}