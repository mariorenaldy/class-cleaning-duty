import {addDays, dateToString} from "./date-utils";

export function generateSchedule(startDate, students, days = 7) {
    let tempStudents = [...students];
    const generatedSchedule = [];

    for (let i = 1; i <= days; i++) {
        let randomIndex = Math.floor(Math.random() * tempStudents.length);
        let randomStudent = tempStudents[randomIndex];

        tempStudents.splice(randomIndex,1);

        const newDate = addDays(startDate, i-1);

        generatedSchedule.push({date: newDate, name: randomStudent.name});
    }

    return generatedSchedule;
}

export function getEarliestScheduleWithoutHistory(scheduleData, historyData) {
    const historyDatesSet = new Set(historyData.map(h => h.date));
    return scheduleData.find(
        s => !historyDatesSet.has(dateToString(s.date))
    );
}