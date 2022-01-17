// this should be configurable or read from a file
export default {
    dateStart: /commenc/gi,
    dateEnd: /end/gi,
    date: /([A-Z](\w)+ \d{1,2})|(IPO Date)|(Trading Day)/g,
    wrappedNumber: /\(\d+\)/g,
    month: /months?/i,
    percentage: /\d{1,3}%/g,
    amount: /\$\d{1,3}(,\d{3})/g,
    contributions: /contributions/i,
    isMin: /not less than \d{1,2}%/i,
    isMax: /not more than \d{1,2}%/i,
    notExceed: /(may not exceed)|(not exceeding)/i,
}