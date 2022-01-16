export default function getPeriods(text: string) {
    const countPattern = /\(\d+\)/g;
    const monthPattern = /months?/g;

    if (monthPattern.test(text)) {
        const matches = text.match(countPattern);
        if (matches) {
            const count = parseInt(matches[0].replace(/\(|\)/g, ''));
            return count;
        }
    }

    return 0
}