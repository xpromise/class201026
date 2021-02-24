## 谈谈 MVVM

## 谈谈插值语法

## 谈谈指令语法（哪些、怎么使用、作用）

## 谈谈计算属性和监视属性

## 谈谈原型
- 原型指的是两个原型属性：
  - prototype 显示原型属性
  - __proto__ 隐式原型属性

- 每个函数都有显示原型属性（箭头函数没有），它的值是一个对象，我们叫原型对象
  - 这个原型对象有一个属性 contructor，他指向函数本身
  - 这个原型对象还有一个属性 __proto__，他指向Object.prototype

- 每个对象都有隐藏原型属性，它的值是一个对象，指向其构造函数的显示原型属性

- 所有数组都是 new Array产生的，所以数组的隐藏原型指向Array的显示原型
  - Array的显示原型就有n个数组的方法，比如：filter map reduce sort
  - 所以数组就能继承得到这些方法

- 所有函数都是 new Function产生的，所以函数的隐藏原型指向Function的显示原型  
  - Function的显示原型就有n个函数的方法，比如：call apply bind
  - 所以函数就能继承得到这些方法

- 特殊：
  - Function可以看做是new Function产生的
    - Function.__proto__ === Function.ptototype
  - Object.prototype.__proto__ === null 这是原型链的终点

- 原型链
  - 作用：对象查找属性的规则
  - 规则：先在自身属性上找，找到了直接返回值，没有找到就沿着__proto__找，直到找到Object.prototype.__proto__，返回值undefined

- 原型和原型链
  - 最终目的就为了继承（复用代码）


