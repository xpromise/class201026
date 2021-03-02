## 谈谈跨域（什么原因，怎么解决，方案尽量多）

## 谈谈 ES（es5\es6\es7， 有能力再看看后面的~）
- es5
  - 严格模式：代码在更加严格的模式下运行
    - 禁止this指向window
    - 禁止变量未声明使用
  - 扩展Object的方法
    - Object.defineProperty() 定义属性的属性（定义属性的元属性）
      - value
      - writable
      - configurable
      - enumerable
      - 用于Vue的响应式原理，响应式原理会用上这个语法做数据劫持和数据代理
  - 扩展Function的方法，bind
    - call / apply / bind 的联系和区别

- es6
  - 比如像 解构赋值 模板字符串 const/let 对象简写 等这些语法开发中佷常用，不一一说了
  - 我们聊聊更加有意思的语法
  - 用来解决异步编程的方案（解决回调地狱问题）
    - promise
      - 问题：并没有真正解决回调地狱问题，还是产生了新的回调
    - generator
      - 状态机函数、惰性函数
      - 通过*定义generator函数
      - 里面有一个关键字 yield 来暂停函数的执行
      - 将来要调用next()来执行函数
      - 整体能让函数内部代码，以同步方式依次执行
    - async（es8）
      - 真正解决回调地狱问题的终极方案
      - generator函数的语法糖
      - 通过async定义函数
      - 通过await关键字来暂停
        - 后面跟着promise对象一起使用

    - class语法
      - 在定义React类组件
      - 构造函数和原型的语法糖  

    - proxy
      - Vue3响应式通过proxy完成的 

- es7
  - 数组includes方法，用来检测数组中是否包含指定元素
  - 指数运算符 ** 

- es8
  - async/await
  - Object.values()

- es9 
  - Promise.finally()
  - import 动态导入 --> 路由懒加载

- es10
  - Array.prototype.flat(Infinity) 数组扁平化  

- es11
  - BigInt 新的基本数据类型
    - String Number Boolean Undefined Null Symbol BigInt   
    - Object Array Function

- es12
  - String.prototype.replaceAll('a', '')    