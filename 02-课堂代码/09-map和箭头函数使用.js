
const arr = [
    {
        name: '小明',
        age: 18
    },
    {
        name: '大明',
        age: 16
    },
    {
        name: '中明',
        age: 17
    }
];

// 通过 map 映射出新数组，新数组中只有名字
// const arrNames = arr.map(function(item){
//     return item.name
// });

const arrNames = arr.map(v => v.name);
console.log(arrNames);

// 总结：
//  v => v.name 其实是一个回调函数
//  功能等价于：
//  function(v){ return v.name }
