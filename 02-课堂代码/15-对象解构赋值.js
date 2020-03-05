


// 对象解构赋值：按照一定模式，从对象中提取值，对变量(常量)进行赋值。


const obj = {
    name: '小明',
    age: 28,
    sex: '女'
};

// 需求：把数据对象的取出来，赋值给某个变量或常量。
// 以前的写法：
// const name = obj.name;
// const age = obj.age;
// const sex = obj.sex;


// ES6写法
//  按照一定模式，从对象中提取值，对变量(常量)进行赋值。
//  PS:数组的解构赋值才需要注意先后顺序，对象的解构赋值无需注意顺序
const { age, name, sex } = obj;    // 这一行代码功能等同于三行赋值操作

console.log('name', name);
console.log('age', age);
console.log('sex', sex);


//  总结：
//      对象解构：按照一定模式，从对象中提取值，对变量(常量)进行赋值。
//      PS:数组的解构赋值才需要注意先后顺序，对象的解构赋值无需注意顺序