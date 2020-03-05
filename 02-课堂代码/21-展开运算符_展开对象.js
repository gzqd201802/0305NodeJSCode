

// 展开对象
const obj = {
    name: '小敏',
    age: 28,
    sex: '女'
};

const obj2 = {
    // 先把 obj 对象展开成用逗号分隔的参数序列。
    ...obj,
    // 把 name 值覆盖成新的值 
    name: '小白'
}

// 功能也等同于以下代码
// const obj2 = {
//     // 对象的数据展开成用逗号分隔的参数序列。
//     name: '小敏',
//     age: 28,
//     sex: '女',
//     // 把 name 值覆盖成新的值 
//     name: '小白'
// }


console.log(obj);           // { name: '小敏', age: 28, sex: '女' }
console.log(obj2);          // { name: '小白', age: 28, sex: '女' }




// 展开运算符小结：
//     1. 把数组或对象展开成用逗号分隔的参数序列。
//     2. 在对象或数组的前面加 ... 就是把数组或对象展开。