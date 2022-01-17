import getPeriods from '../getPeriods';

describe('getPeriods', () => {
  it('should return a number', () => {
    expect(typeof getPeriods('(4) months')).toBe('number');
  });

  it('should convert (4 months to 0', () => {
    expect(getPeriods('(4 months')).toBe(0);
  });

  it('should convert (4) months to 4', () => {
    expect(getPeriods('(4) months')).toBe(4);
  });
});
