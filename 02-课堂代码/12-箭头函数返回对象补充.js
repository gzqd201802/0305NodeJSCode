

// 定义一个函数，函数内部返回了一个对象
const fn1 = function () {
    return { name: '小明', bb: 11 };
};
const r1 = fn1();
console.log('function 函数内部返回的对象', r1);

// 补充：箭头函数直接返回一个对象，必须在对象外面加上小括号，否则会报错。
const fn2 = () => ({ name: '小明2', bb: 22 });
const r2 = fn2();
console.log('箭头函数内部返回的对象', r2);

