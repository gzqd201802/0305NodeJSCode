
// Array 对象在 NodeJS 中支持
// 当然还有其他在 JS 基础阶段学习的内置对象：
//      1. Array
//      2. String
//      3. Function
//      4. Date
//      5. Math

let arr = [11, 22, 33, 44];

// Array 对象的方法也能调用
arr.forEach(function (item, index) {
    console.log(item, index);
});

