/**
 * 数组：有序列表组成集合
 * 数组元素可以是任意数据类型
 */
//1.数组创建 直接字面量
// var arr = ['hello',true,10,null,undefined,{name:"Alice"}];
// console.log(arr);
//数组元素访问 索引 下标 index 从0开始
// console.log(arr[5]);
// console.log(arr[arr.length-1]);

/**
 * 数组api
 * reverse pop push shift unshift forEach方法
 */

/** 
 * 1.pop方法 从数组元素末尾删除一个数组元素
 * 2.push方法 从数组元素末尾增加数组元素
 * 3.shift方法 从数组元素头部删除一个数组元素
 * 4.unshift方法 从数组元素头部增加数组元素
 * 5.reverse方法 反转数组元素
 * 6.forEach方法 
*/
var arr = ['hello',true,10,null,undefined,{name:"Alice"}];
//arr.pop();
//arr.push('Peter','Joe');
//arr.shift();
//arr.unshift('herry','ken');
//arr.reverse();
// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i])
// }

// arr.forEach(function(item,index,arr){
//     //item 数组每一项 index数组每一项对应的索引arr数组本身
//     console.log(item,index,arr);
// })

//2.创建数组使用构造函数
var arr1 = new Array(10,true,'hello',null);
console.log(arr1);