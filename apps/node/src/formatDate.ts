const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function formatDate(date: Date): string {
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}`;
}
