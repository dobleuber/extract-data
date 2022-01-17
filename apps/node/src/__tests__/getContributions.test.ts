import getContributions from '../getContributions';

describe('getContributions', () => {
  it('should be defined', () => {
    expect(getContributions).toBeDefined();
  });

  it('should return min and max values', () => {
    const input =
      'Contribution Amounts. Subject to the limitations of Sections 3(b) and 11, a Participant shall elect to have Contributions made as payroll deductions on each payday during the Contribution Period in any percentage of his or her Compensation that is not less than 1% and not more than 15% (or such other maximum percentage as the Committee may establish from time to time before any Commencement Date) of such Participant’s Compensation on each payday during the Contribution Period. Contribution amounts shall be withheld in whole percentages only.';
    const expected = {
      min: ['1%'],
      max: ['15%'],
    };

    const result = getContributions(input);
    expect(result).toEqual(expected);
  });

  it('should return max values only', () => {
    const input =
      'The enrollment documents, which may, in the discretion of the Administrator, be in electronic form, shall set forth the amount of the Participant’s Compensation in whole dollars, which may not exceed $5,000 per Offering Period (or such other amount as may be prescribed by the Administrator from time to time) or forty percent (40%) of Participant’s Compensation per Offering Period (or such other percentage as may be prescribed by the Administrator from time to time), to be paid as Contributions pursuant to the Plan.';
    const expected = {
      min: [],
      max: ['$5,000', '40%'],
    };

    const result = getContributions(input);
    expect(result).toEqual(expected);
  });

  it('should return a max value only', () => {
    const input =
      'At the time a Participant enrolls in the Plan pursuant to Section 5 of the Plan, he or she will elect to have Contributions (in the form of payroll deductions or otherwise, to the extent permitted by the Administrator) made on each pay day during the Offering Period in an amount not exceeding fifteen percent (15%) of the Compensation, which he or she receives on each pay day during the Offering Period (for illustrative purposes, should a pay day occur on an Exercise Date, a Participant will have any payroll deductions made on such day applied to his or her account under the then-current Purchase Period or Offering Period).';
    const expected = {
      min: [],
      max: ['15%'],
    };

    const result = getContributions(input);
    expect(result).toEqual(expected);
  });
});
