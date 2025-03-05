const dayjs = require('dayjs');
const isLeapYear = require('dayjs/plugin/isLeapYear');
dayjs.extend(isLeapYear);
const now = dayjs();
const data = now.isBefore(dayjs('2025-02-28').endOf('day'));
const data2 = now.subtract(1, 'year').isLeapYear();

console.log(data, data2);
