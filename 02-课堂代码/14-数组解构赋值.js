
// const arr = ['小明', '大名', '中民'];

// // 之前的写法，需要从数组中拿到数据并赋值给变量(常量)
// // const name1 = arr[0];
// // const name2 = arr[1];
// // const name3 = arr[2];

// 总结：ES6中允许从数组中提取值，按照对应位置，对变量(常量)进行赋值。
const [name1, name2, name3] = ['小明', '大名', '中民'];

console.log('name1', name1);
console.log('name2', name2);
console.log('name3', name3);

// ES6中允许从数组中提取值，按照对应位置，对变量(常量)进行赋值。
// const [name1, name2, name3, name4] = ['小明', '大名', '中民'];

// console.log('name1', name1);
// console.log('name2', name2);
// console.log('name3', name3);
// console.log('name4', name4);        // undefined，数组中没有第四项数组，解构不到就是 undefined


// 最后的这种情况比较少见：了解即可，如果前面的数据不需要保存变量也要挖个坑处理
// const [ , , name3, name4] = ['小明', '大名', '中民', '二明'];

// console.log('name3', name3);
// console.log('name4', name4);


// 总结：
//    ES6中允许从数组中提取值，按照对应位置，对变量(常量)进行赋值。