/**
 * 对象：Object
 * 无序列表组成的集合
 */
//对象创建 1.直接字面量
var obj = {
    name:'terry',
    age:20,
    gender:'male'
};
// console.log(obj,typeof obj);

// 2.访问对象中的属性 点访问法 中括号访问法
// console.log(obj.name);
// console.log(obj['age'])

//3.新增/修改对象中的属性 点访问法 中括号访问法
// obj.weight = '40kg';
// obj['name'] = 'larry';
// console.log(obj);

//4.删除对象中的属性 delete
// delete obj.name;
// console.log(obj);

//5.遍历对象 for in 循环遍历 中括号可以解析变量
// for(let key in obj){
//     console.log(key,obj[key])
// }

//6.创建对象可以使用构造函数Object
var obj = new Object()
obj.name = 'Alice';
obj.age = 20;
console.log(obj);