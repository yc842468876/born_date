const arr = [1, 2, 3, 4];
const set = new Set();

const data = arr.forEach((item, index) => set.add(item));

console.log(data);

const p = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

console.log('start', 1111111111);
p.then(() => {
  console.log('then', 222222222);
});
