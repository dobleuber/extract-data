import getDates from '../getDates';
import patterns from '../patterns';

// TODO: reset regex state, only works every other time
// https://blog.stevenlevithan.com/archives/es3-regexes-broken
describe('getDates', () => {
  beforeEach(() => {
    patterns.date.lastIndex = 0;
  });
  it('should be defined', () => {
    expect(getDates).toBeDefined();
  });

  fit('should return dates', () => {
    const input =
      'Subject to the following paragraph (b), the Plan shall be implemented by a series of consecutive Contribution Periods commencing on January 1 and July 1 each year and ending on the following June 30 and December 31, respectively';
    const expected = {
      start: ['January 1', 'July 1'],
      end: ['June 30', 'December 31'],
    };

    const result = getDates(input);
    expect(result).toEqual(expected);
  });

  it('should calculate end dates', () => {
    const input =
      'Unless otherwise determined by the Administrator, each Offering Period shall be a period of three (3) calendar months commencing on January 1, April 1, July 1 and October 1 of each calendar year during the Term of the Plan. The first Offering Period under the Plan shall commence as of July 1, 2021.';

    const expected = {
      start: ['January 1', 'April 1', 'July 1', 'October 1'],
      end: ['April 1', 'July 1', 'October 1', 'January 1'],
    };

    const result = getDates(input);

    expect(result).toEqual(expected);
  });

  it('should return code dates', () => {
    const input =
      'Unless the Administrator determines otherwise, following the completion of the first Offering Period, a new Offering Period shall commence on the first Trading Day on or following May 15 and November 15 of each calendar year and end on or following the last Trading Day on or immediately preceding November 14 and May 14, respectively, approximately six (6) months later.';
    const expected = {
      start: ['Trading Day', 'May 15', 'November 15'],
      end: ['Trading Day', 'November 14', 'May 14'],
    };

    const result = getDates(input);

    expect(result).toEqual(expected);
  });
});
