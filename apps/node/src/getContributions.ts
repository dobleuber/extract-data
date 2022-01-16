import { SentenceTokenizer } from 'natural';
import patterns from './patterns';

interface Contribution {
  min: string[];
  max: string[];
}

function isMinimun(input: string): boolean {
  return patterns.isMin.test(input);
}

function isMaximun(input: string): boolean {
  return patterns.isMax.test(input) || patterns.notExceed.test(input);
}

export default function getContributions(input: string): Contribution {
  const tokenizer = new SentenceTokenizer();
  const sentences = tokenizer.tokenize(input);
  const dates = sentences.map((sentence) => {
    if (patterns.contributions.test(sentence)) {
      const amount = sentence.match(patterns.amount) || [];
      const percentage = sentence.match(patterns.percentage) || [];
      const findings = [...amount, ...percentage];

      const min = [];
      const max = [];

      findings.forEach((find) => {
        const findIndex = sentence.indexOf(find);
        if (findIndex > -1) {
          const subSentence = sentence.substring(0, findIndex + find.length);
          if (isMinimun(subSentence)) {
            min.push(find);
          } else if (isMaximun(subSentence)) {
            max.push(find);
          }
        }
      });

      return {
        min,
        max,
      };
    }

    return null;
  });

  return dates.filter((date) => !!date)[0];
}
