
const arr = ['小明', '中明', '大明'];

// 解构赋值 和 剩余参数使用：
const [name1, ...name2] = arr;
// 以上代码等价于：
// const name1 = arr[0];
// const name2 = 剩余的数组数据;

console.log('name1', name1);
console.log('name2', name2);
