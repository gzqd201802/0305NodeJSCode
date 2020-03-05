

const arr = {
    sort: function( fn ){
        // 内部调用了传进来的函数，最终把数组排序处理好了
        fn();
    }
}

arr.sort(function(){});