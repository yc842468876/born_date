const dayjs = require('dayjs');
const calendar = require('chinese-workday');

const data = dayjs().diff('2025-01-19', 'day');
console.log(data, data > 7);
