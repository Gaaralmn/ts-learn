export const dateStringToDate = (dateString: string): Date => {
    // 28/12/2020
    const dateParts = dateString
    .split('/')
    .map(
        (value: string): number => {
            return parseInt(value);
        }
    );
    const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
    // console.log(`Convert ${dateString} to ${date}`);
    return date;
};