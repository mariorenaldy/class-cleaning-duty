'use client';

import {useState} from "react";
import Title from "../components/title";
import ScheduleInput from "../components/schedule-input";
import ScheduleTable from "../components/schedule-table";

export default function HomePage() {
    const students = [
        'Jackson','Ray','Michael','Felix','Harry',
        'Justin','Mason','Drake','Brian','Silvia',
        'Tyler','Zion','Ivy','Wayne','Roger'
    ];

    const [scheduleData, setScheduleData] = useState([]);
    const [dateInput, setDateInput] = useState(new Date());

    return (
        <div className="root">
            <Title />
            <ScheduleInput dateInput={dateInput} setDateInput={setDateInput} students={students} setScheduleData={setScheduleData} />
            <ScheduleTable scheduleData={scheduleData} />
        </div>
    )
}