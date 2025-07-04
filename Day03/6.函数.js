/**
 * 函数：封装可复用代码
 */
// function 函数名(形式参数){
//     形式参数-形参：接收实际函数
//     函数体
// }
// 函数调用：函数名(实际参数/实参)

function foo(a,b){
    console.log(a + b)
}
foo(10,20);
foo(40,50);

/**
 * es6使用箭头函数 vue3框架
 * 内部没有this arguments
 */

const bar = (a,b) => {
    console.log(a + b)
};
bar(20,30);