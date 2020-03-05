
// const fn = function (num) {
//     return console.log('函数运行了你的参数是', num);
// }


// // 花括号内只有一行代码，可以把函数体的 花括号{} 省略掉。
// const fn = num => console.log('函数运行了你的参数是', num);


// // 用 reslut 接收函数的返回值
// const reslut = fn(666);    // 实参
// console.log('reslut的结果是',reslut);


// 小例子：封装一个函数，传入一个单姓的名字，函数运行后返回这个名字姓什么。

// 普通写法：
// const getName = function (name) {
//     return name.charAt(0);
// };

// 探索箭头函数化简的极限：
const getName = name => name.charAt(0);


const r1 = getName('周杰伦');
console.log('函数运行的返回值是', r1);




// 小结：
//      1. 箭头函数省略了 function，变成了 => 符号，语法如： () => {}
// 化简：
//      1. 如果形参只有一个，可以把形参的圆括号()省略掉。
//      2. 如果花括号内只有一行代码，可以把函数体的 花括号{} 和 return 都省略掉。
