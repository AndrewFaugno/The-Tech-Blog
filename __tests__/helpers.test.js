const { format_date } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-6-29 16:09:03');

    expect(format_date(date)).toBe('6/29/2022');
});