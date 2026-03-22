'use client';

import {useState} from "react";
import Title from "../components/title";
import Tabs from "../components/tabs";
import TabContent from "../components/tab-content";

export default function HomePage() {
    const students = [
        'Jackson','Ray','Michael','Felix','Harry',
        'Justin','Mason','Drake','Brian','Silvia',
        'Tyler','Zion','Ivy','Wayne','Roger'
    ];

    const [scheduleData, setScheduleData] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const [dateInput, setDateInput] = useState(new Date());
    const [selectedTab, setSelectedTab] = useState('Schedule');

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
            />
        </div>
    )
}