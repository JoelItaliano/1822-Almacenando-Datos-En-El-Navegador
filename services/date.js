export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach(tasks => {
        if(!unique.includes(tasks.dateFormat)) {
            unique.push(tasks.dateFormat)
        }
    });

    return unique;
};

export const ordenDates = (dates) => {
    return dates.sort((a, b) => {
        const fitstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return fitstDate - secondDate;
    })
}