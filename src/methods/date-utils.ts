// Catalan date formatting
const catalanOptions: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
};

export const formatDateToCatalan = (date: Date): string => {  
    return date.toLocaleDateString('ca-ES', catalanOptions);
}

export const getNumberOfDays = (fromDate: Date, toDate: Date): number => {
    const diffTime = Math.abs(toDate.getTime() - fromDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}