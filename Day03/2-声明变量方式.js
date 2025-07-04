/**
 * var声明变量
 * 特点：
 * 1.var声明变量会进行变量提升
 *     console.log(a);//undefined
 *     var a = 10;
 * 
 * 解析顺序
 *     var a;
 *     console.log(a);
 *     a = 10;
 * 2.var可以重复声明变量
 *     var a = 10;
 *     var a = 20;
 *     console.log(a);//20
 * 3.var声明变量不存在块级作用域
 *     if(true){
 *        var a = 10;
 *      }
 *     console.log(a);
 *     var a = 10;
 */
/**
 * let声明变量
 * 特点：
 * 1.不会进行变量提升
 *     console.log(a);//报错 不能访问a在初始化之前
 *     let a = 10；
 * 2.不可以重复声明变量
 *     let a = 10;
 *     let a = 20;//报错
 * 3.存在块级作用域
 *     if(true){
         let a = 10;
        }
        console.log(a);
 */

    /**
     * const声明变量
     * 特点：
     * 1.不会进行变量提升
     *     console.log(a);
           const a = 20;
       2.无法重复声明变量
           const a = 10;
           const a = 20;
       3.存在块级作用域
           if(true){
             const a = 10;
            }
            console.log(a);
        4.const声明变量必须进行初始化
            const a = 10;
            const a;//错误 必须初始化
        5.const声明的变量不允许二次赋值 一般用于声明常量
            const a = 10;
            a =20;
            console.log(a);//报错
    */
