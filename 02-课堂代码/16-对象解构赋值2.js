


// 对象解构赋值：按照一定模式，从对象中提取值，对变量(常量)进行赋值。

const obj = {
    name: '小明',
    age: 28,
    sex: '女'
};

// 需求：把数据对象的取出来，赋值给某个变量或常量。

// ES6写法
// 按照一定模式，从对象中提取值，对变量(常量)进行赋值。
// 了解：变量(常量)的名称改名写法。
const { name: myName, age: myAge,  sex } = obj;
// 这一行代码功能等同于以下的三行赋值操作
// const myName = obj.name;
// const myAge = obj.age;
// const sex = obj.sex;

console.log('myName', myName);
console.log('myAge', myAge);        
console.log('sex', sex);


//  总结：
//      对象解构：按照一定模式，从对象中提取值，对变量(常量)进行赋值。
//      PS:数组的解构赋值才需要注意先后顺序，对象的解构赋值无需注意顺序