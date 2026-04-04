'use client';

import {useState} from "react";
import Title from "../components/title";
import Tabs from "../components/tabs";
import TabContent from "../components/tab-content";

export default function HomePage() {
    const [students, setStudents] = useState([
        { index: 1, name: "Jackson", score: 0 },
        { index: 2, name: "Ray", score: 0 },
        { index: 3, name: "Michael", score: 0 },
        { index: 4, name: "Felix", score: 0 },
        { index: 5, name: "Harry", score: 0 },
        { index: 6, name: "Justin", score: 0 },
        { index: 7, name: "Mason", score: 0 },
        { index: 8, name: "Drake", score: 0 },
        { index: 9, name: "Brian", score: 0 },
        { index: 10, name: "Silvia", score: 0 },
        { index: 11, name: "Tyler", score: 0 },
        { index: 12, name: "Zion", score: 0 },
        { index: 13, name: "Ivy", score: 0 },
        { index: 14, name: "Wayne", score: 0 },
        { index: 15, name: "Roger", score: 0 },
    ]);

    const [scheduleData, setScheduleData] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [dateInput, setDateInput] = useState(new Date());
    const [selectedTab, setSelectedTab] = useState('Schedule');

    function addStudentScore(studentIndex, scoreToAdd) {
        setStudents((prev) =>
            prev.map((student) => student.index === studentIndex ? { ...student, score: student.score + scoreToAdd} : student)
        );
    }

    function subtractStudentScore(studentIndex, scoreToSubtract) {
        setStudents((prev) =>
            prev.map((student) => student.index === studentIndex ? { ...student, score: student.score - scoreToSubtract} : student)
        );
    }

    return (
        <div className="content">
            <Title />
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <TabContent
                selectedTab={selectedTab}
                dateInput={dateInput}
                students={students}
                scheduleData={scheduleData}
                setScheduleData={setScheduleData}
                historyData={historyData}
                setHistoryData={setHistoryData}
                addStudentScore={addStudentScore}
                subtractStudentScore={subtractStudentScore}
            />
        </div>
    )
}