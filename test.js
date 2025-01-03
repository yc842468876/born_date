const { log } = require('console');
const fs = require('fs');

const data = fs.readFileSync('./__临时笔记.txt');
console.log(data);

const data2 = ['1 ', '5', '11'].map(parseInt);

console.log(data2);

console.log(parseInt('15', 0));
