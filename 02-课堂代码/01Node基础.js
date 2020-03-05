
for (let i = 1; i <= 10; i++) {
    console.log('现在运行了JS代码', i);
}

// 注意事项：
//   NodeJS 环境中没有 window 对象，没有 document 对象，所以不用管他们(因为这些是浏览器的功能)
//   NodeJS 只允许运行 JS 代码，所以这里也不需要关心 HTML 结构和 CSS 样式

// console.log(window);    // 报错：window is not defined