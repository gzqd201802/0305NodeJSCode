
// 最早的版本
// const fn = function (num) {
//     console.log('你的参数是', num);
// };


// () 括号里面的还是形参
// const fn = (num) => {
//     console.log('你的参数是', num);
// };



// 如果形参只有一个，圆括号()可以省略掉
// const fn = num => {
//     console.log('你的参数是', num);
// };


// 花括号内只有一行代码，可以把函数体的 花括号{} 省略掉。
const fn = num => console.log('函数运行了你的参数是', num);


// 用 reslut 接收函数的返回值
const reslut = fn(666);    // 实参
console.log('reslut的结果是',reslut);




// 小结：
//      1. 箭头函数省略了 function，变成了 => 符号，语法如： () => {}
// 化简：
//      1. 如果形参只有一个，可以把形参的圆括号()省略掉。
//      2. 如果花括号内只有一行代码，可以把函数体的 花括号{} 和 return 都省略掉。
