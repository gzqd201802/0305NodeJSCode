

// 在 function 函数内部 arguments 对象会接收到所有的实参
const fn = function () {
    console.log('1. function 函数内部', arguments);
};

// 定义一个 箭头 函数
const fn2 = () => {
    console.log('2. 箭头函数内部', arguments);
};

fn(11, 22, 33);
fn2(11, 22, 33);

