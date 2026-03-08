export function addDays(dateInput, numberOfDays) {
    const date = new Date(dateInput);
    date.setDate(date.getDate() + numberOfDays);
    return date;
}

export function dateToISOString(dateInput) {
    const date = new Date(dateInput);
    return date.toISOString().split("T")[0];
}

export function dateToLocalString(dateInput) {
    const date = new Date(dateInput);
    return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}