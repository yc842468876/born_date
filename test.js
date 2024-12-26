const obj = {
  name: '小明',
  age: 18,
};

const handler = {
  get: (obj, prop) => {
    console.log('get', prop);

    return obj?.[prop] || null;
  },

  set: (obj, prop, value) => {
    console.log('set', prop, value);

    obj[prop] = value;
  },
};

const p = new Proxy(obj, handler);

console.log(p.name);
console.log(p.a);

p.name = '老六';
p.c = 7;

console.log(obj);
console.log(p);
