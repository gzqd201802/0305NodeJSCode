
// 把外面的 this 地址保存到一个 that 常量中
const that = this;

// 定义一个 function 函数
const fn = function () {
    // 输入函数内的 this 和 外面的 this 内存地址是否相等。
    console.log('1. function 函数内的this和外面的this内存地址比较', this === that);   // false
};

fn();


// 定义一个 箭头 函数
const fn2 =  () => {
    // 输入函数内的 this 和 外面的 this 内存地址是否相等。
    // 由于箭头函数定义的时候是没有自己的 this，这里的 this 其实就是外面的 this。
    console.log('2. 箭头函数内的this和外面的this内存地址比较', this === that);   // true
};

fn2();


// 总结：
//      1. 箭头函数没有自己的 this，由函数定义时的上下文决定(就是定义箭头函数时所在的作用域)。
//      2. function 函数内部有自己的 this，还受到函数调用者的影响，还受 call,apply,bind 影响。
