export function addDays(dateInput, numberOfDays) {
    const date = new Date(dateInput);
    date.setDate(date.getDate() + numberOfDays);
    return date;
}

export function dateToString(dateInput) {
    const date = new Date(dateInput);
    return date.toLocaleDateString("en-CA");
}

export function dateToFormattedString(dateInput) {
    const date = new Date(dateInput);
    return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

export function getDayString(dateInput) {
    return dateInput.toLocaleDateString('en-US', {weekday: 'long'});
}