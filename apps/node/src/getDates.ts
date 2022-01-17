import { SentenceTokenizer } from 'natural';
import getPeriods from './getPeriods';
import formatDate from './formatDate';
import patterns from './patterns';

interface DateExtract {
  start: string[];
  end: string[];
}

export default function getDates(input: string): DateExtract {
  const tokenizer = new SentenceTokenizer();
  const sentences = tokenizer.tokenize(input);

  const dates = sentences
    .map((sentence) => {
      const possibleDates =
        patterns.dateStart.test(sentence) && patterns.dateEnd.test(sentence);
      if (possibleDates) {
        let endIndex = sentence.indexOf('ending on');

        if (endIndex === -1) {
          endIndex = sentence.indexOf('end on');
        }

        if (endIndex === -1) {
          endIndex = sentence.length;
        }

        const beginPart = sentence.substring(0, endIndex);

        const endPart = sentence.substring(endIndex);

        const startDates = beginPart.match(patterns.date);

        let endDates = endPart.match(patterns.date);

        if (endDates === null) {
          const period = getPeriods(sentence);
          if (period > 0) {
            endDates = startDates.map((date) => {
              const dateObject = new Date(date);
              dateObject.setMonth(dateObject.getMonth() + period);
              return formatDate(dateObject);
            });
          }
        }

        return {
          start: startDates,
          end: endDates,
        };
      }

      return null;
    })
    .filter((date) => !!date);

  const result = dates.reduce(
    (acc, date) => {
      acc.start = [...new Set(acc.start.concat(date.start))];
      acc.end = [...new Set(acc.end.concat(date.end))];

      return acc;
    },
    { start: [], end: [] },
  );

  return result;
}
