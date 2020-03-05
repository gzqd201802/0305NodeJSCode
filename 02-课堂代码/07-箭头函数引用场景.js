

const arr = [111, 22, 333, 99, 10];

// 数组的sort方法，如果想要实现从小到大排序，必须要传入一个函数才可以实现。

// arr.sort(function(a,b){
//     return a - b;
// });

// 利用箭头函数化简 sort 中传入的 匿名函数
arr.sort((a, b) => a - b);

console.log(arr);