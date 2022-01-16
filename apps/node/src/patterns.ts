// this should be configurable or read from a file
export default {
    dateStart: /commenc/gi,
    dateEnd: /end/gi,
    date: /([A-Z](\w)+ \d{1,2})|(IPO Date)|(Trading Day)/g,
    wrappedNumber: /\(\d+\)/g,
    month: /months?/gi,
}