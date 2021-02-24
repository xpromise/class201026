# day01

## Vue

- 渐进式 JS 框架

- MVC

  - M - Model 数据层（数据库）
  - V - View 视图层（页面）
  - C - Controler 控制层（路由）

- MVVM

  - M - Model 数据层（data、methods、computed...）
  - V - View 视图层（模板页面）
  - VM - ViewModel 视图模型层（vm 实例对象）
    - Model 的数据可以流向 View 视图（ViewModel 负责从 Model 读取数据渲染到 View 层）
    - View 视图的数据发生修改可以流向 Model 层（ViewModel 负责绑定事件，从事件中读取 View 层修改的数据，再去修改 Model 的数据）
    - 从而达到双向

- new Vue(config)

```vue
new Vue({ el: '#app', data: {}, methods: {}, computed: {}, watch: {} })
```

## 模板语法

- 双大括号表达式（插值语法）

  - 语法：{{JS表达式}}
  - 作用：用来渲染 JS 动态数据
  - 注意：只能用于标签内，不能作为标签属性

- 指令语法
  - 语法： v-xxx:propName="JS 表达式" v-xxx="JS 表达式"
  - 作为标签属性使用
  - v-model
    - 用来双向数据绑定
    - `v-model="msg"`
  - v-bind
    - 用来单向数据绑定（强制绑定数据）
    - `v-bind:value="msg"`
    - 简写 `:value="msg"`
  - v-on
    - 用来绑定事件
    - `v-on:click="handleClick"`
    - 简写 `@click="handleClick"`
  - v-if / v-else-if / v-else
    - 用来条件渲染
    - `v-if="isShow"`
    - 隐藏时会删除 DOM 元素
  - v-show
    - 用来条件渲染
    - `v-show="isShow"`
    - 隐藏时通过 display:none 控制
  - v-for
    - 用来列表渲染
    - `v-for="item, index in xxx" :key="item.id"`
    - 注意需要加上唯一的 key 属性
    - 可以遍历对象和数组

## 计算属性和监视属性

- computed 计算属性

  - 只读计算属性
    ```js
    computed: { fullName() { return xxx; } }
    ```
  - 可读可写计算属性
    ```js
    computed: { fullName: { get() {}, set(newVal) {} } }
    ```
  - 通常情况下，计算属性内部会使用 data 数据。一旦内部使用的 data 数据发生变化，计算属性就会重新计算结果。如果 data 数据没有变化，就不会重新计算，使用上一次的缓存结果（有缓存）。

- watch
  ```js
    watch: { firstName(newVal, oldVal) {  } }
  ```
  - 监视一个已存在的 data 属性，一旦 data 属性发生变化，就会调用相应的函数处理

## 样式处理

- class

  - `<p class="red">xxx</p>`
  - `<p :class="red">xxx</p>`
  - `<p :class="{red: isRed}">xxx</p>`
  - `<p :class="[red, 'green']">xxx</p>`

- style

  - `<p style="font-size: 16px;">xxx</p>`
  - `<p :style="{fontSize: '16px'}">xxx</p>`

- 静态样式：用 class
- 动态样式（样式会发生变化）：
  - 样式如果是有限几种变化就用 class
  - 样式如果无穷的变化就只能用 style
