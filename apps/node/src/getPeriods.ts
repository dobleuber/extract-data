import patterns from './patterns';

export default function getPeriods(text: string) {
  if (patterns.month.test(text)) {
    const matches = text.match(patterns.wrappedNumber);
    if (matches) {
      const count = parseInt(matches[0].replace(/\(|\)/g, ''));
      return count;
    }
  }

  return 0;
}
