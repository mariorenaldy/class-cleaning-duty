import {addDays} from "./date";

export function generateSchedule(startDate, students, days = 7) {
    let tempStudents = [...students];
    const generatedSchedule = [];

    for (let i = 1; i <= days; i++) {
        let randomIndex = Math.floor(Math.random() * tempStudents.length);
        let randomStudent = tempStudents[randomIndex];

        tempStudents.splice(randomIndex,1);

        const newDate = addDays(startDate, i-1);

        generatedSchedule.push({index: i, date: newDate, name: randomStudent});
    }

    return generatedSchedule;
}