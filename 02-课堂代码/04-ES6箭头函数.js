
const sum = function (a, b) {
    // 参数相加
    const result = a + b;
    // 输出结果
    console.log('function函数结果', result);
};


const sum2 = (a, b) => {
    // 参数相加
    const result = a + b;
    // 输出结果
    console.log('箭头函数结果', result);
};

sum(1, 2);

sum2(1, 2);

// 小结：
//      1. 箭头函数省略了 function，变成了 => 符号，语法如： () => {}
